import { gunzipUtf8 } from './DILInflater';

/**
 * Compressed widget state codec.
 *
 * This is a faithful port of `dil_compiler/src/CompressedWidgetState` as recovered
 * from ChatGPT's bytecode: the payload is a *plain JSON object* carrying a compact,
 * URL-safe representation of the widget's initial state:
 *
 *     { "__encoding": "gzip-json-base64url-v1", "__compressed": "<base64url(gzip(json))>" }
 *
 * Anything that does not match that shape is returned untouched, which is why the
 * normal `model_dil_v2` documents (plain JSON sent by the server) never reach the
 * native inflater.
 */

/** Encoding tag, restored verbatim (module constant `s` in the original). */
export const COMPRESSED_WIDGET_STATE_ENCODING = 'gzip-json-base64url-v1';

/** Output cap, restored verbatim (module constant `n` = 16 MiB = the native default). */
export const MAX_UNCOMPRESSED_BYTES = 16777216;

/**
 * Diagnostic error mirroring the original `DILDiagnosticError`: the DIL engine
 * wraps decode failures so the widget can fall back to markdown.
 */
export class DILDiagnosticError extends Error {
  public readonly phase: string;

  constructor(phase: string, message: string) {
    super(message);
    this.name = 'DILDiagnosticError';
    this.phase = phase;
  }
}

export interface CompressedWidgetState {
  __encoding: string;
  __compressed: string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** Restored predicate: is this value a compressed widget state? */
export function isCompressedWidgetState(value: unknown): value is CompressedWidgetState {
  if (!isObject(value)) {
    return false;
  }
  return (
    value.__encoding === COMPRESSED_WIDGET_STATE_ENCODING && typeof value.__compressed === 'string'
  );
}

const BASE64URL_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

/** Decodes base64url (no padding required) into bytes. */
export function base64UrlToBytes(input: string): Uint8Array {
  const sanitized = input.replace(/[^A-Za-z0-9\-_]/g, '');
  const bytes = new Uint8Array(Math.floor((sanitized.length * 6) / 8));
  let accumulator = 0;
  let bitCount = 0;
  let outIndex = 0;
  for (let i = 0; i < sanitized.length; i++) {
    const value = BASE64URL_ALPHABET.indexOf(sanitized[i]);
    if (value < 0) {
      continue;
    }
    accumulator = (accumulator << 6) | value;
    bitCount += 6;
    if (bitCount >= 8) {
      bitCount -= 8;
      bytes[outIndex++] = (accumulator >> bitCount) & 0xff;
    }
  }
  return outIndex === bytes.length ? bytes : bytes.subarray(0, outIndex);
}

/**
 * Restored `parseWidgetInitialStateValue(value)`:
 * compressed state -> inflated JSON, everything else -> returned as-is.
 */
export function parseWidgetInitialStateValue(value: unknown): unknown {
  if (!isCompressedWidgetState(value)) {
    return value;
  }
  let decodedText: string | undefined;
  try {
    const bytes = base64UrlToBytes(value.__compressed);
    if (bytes.length > MAX_UNCOMPRESSED_BYTES) {
      throw new Error('payload exceeds the compressed-state limit');
    }
    // gunzipUtf8 returns the inflated UTF-8 text (native module, 16 MiB default limit).
    decodedText = gunzipUtf8(bytes);
    return JSON.parse(decodedText);
  } catch (error) {
    throw new DILDiagnosticError(
      'DIL JSON parse',
      'Failed to decode compressed widget state: ' + String(decodedText ?? error),
    );
  }
}

/**
 * Restored `parseWidgetInitialStateJson(json)`: same as above but starting from
 * a JSON string (the shape the server puts on the wire).
 */
export function parseWidgetInitialStateJson(json: string): unknown {
  return parseWidgetInitialStateValue(JSON.parse(json));
}

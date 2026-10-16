import { MODEL_DIL_V2_DOCUMENT } from './payloads';

// Module entry point: executed once when the compiled module is loaded by the
// Valdi runtime. Kept tiny on purpose — the UI lives in `./App`.
console.log('myapp_dil loaded, sample DIL document type=' + MODEL_DIL_V2_DOCUMENT.type);

export { DILNodeView } from './DILRenderer';
export { App } from './App';

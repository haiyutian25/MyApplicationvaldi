#!/usr/bin/env python3
"""Remove library classes that the app already provides from an exported Valdi AAR.

The AAR produced by `valdi export android` is a *fat* artifact: it carries the Valdi
runtime, the generated module classes **and** third-party libraries such as
``javax.inject``. The app depends on ``javax.inject:javax.inject`` itself, so packaging
the same classes twice makes ``:app:checkDebugDuplicateClasses`` fail with::

    Duplicate class javax.inject.Inject found in modules
        javax.inject-1.jar (javax.inject:javax.inject:1)
        and my_application_valdi_export.aar

This script rewrites ``classes.jar`` inside the AAR without those entries. Everything
else (resources, ``jni/**`` native libraries, the rest of ``classes.jar``) is copied
through unchanged.

Usage:
    python3 tools/strip_aar_duplicates.py path/to/export.aar
"""

from __future__ import annotations

import io
import os
import shutil
import sys
import tempfile
import zipfile

# Package prefixes that the host app provides on its own classpath.
STRIPPED_PREFIXES = ("javax/inject/",)


def strip_aar(aar_path: str) -> int:
    """Rewrite *aar_path* in place, dropping the stripped prefixes from classes.jar.

    Returns the number of removed entries.
    """
    tmp_path = aar_path + ".tmp"
    removed = 0

    with zipfile.ZipFile(aar_path) as source, zipfile.ZipFile(
        tmp_path, "w", zipfile.ZIP_DEFLATED
    ) as target:
        for item in source.infolist():
            data = source.read(item.filename)

            if item.filename == "classes.jar":
                classes_path = os.path.join(tempfile.gettempdir(), "aar_classes_in.jar")
                with open(classes_path, "wb") as handle:
                    handle.write(data)

                buffer = io.BytesIO()
                with zipfile.ZipFile(classes_path) as classes_in, zipfile.ZipFile(
                    buffer, "w", zipfile.ZIP_DEFLATED
                ) as classes_out:
                    for entry in classes_in.infolist():
                        if entry.filename.startswith(STRIPPED_PREFIXES):
                            removed += 1
                            continue
                        classes_out.writestr(entry, classes_in.read(entry.filename))
                data = buffer.getvalue()

            target.writestr(item, data)

    shutil.move(tmp_path, aar_path)
    return removed


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("usage: strip_aar_duplicates.py <aar>", file=sys.stderr)
        return 2

    aar_path = argv[1]
    if not os.path.isfile(aar_path):
        print("not a file: %s" % aar_path, file=sys.stderr)
        return 1

    removed = strip_aar(aar_path)
    print(
        "stripped %d entries from classes.jar in %s (%.2f MB)"
        % (removed, aar_path, os.path.getsize(aar_path) / 1048576.0)
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))

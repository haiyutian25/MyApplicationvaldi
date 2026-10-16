# 这里放 Valdi 导出的 AAR

```
valdi export android --output_path my_application_valdi_export.aar
```

把产物放到本目录（`core/valdi/libs/my_application_valdi_export.aar`），`:core:valdi` 的
`build.gradle.kts` 里已经声明了 `implementation(files("libs/my_application_valdi_export.aar"))`
与 `jniLibs.srcDirs("libs")`（AAR 内带 `lib/*/libmy_application_valdi_export.so`）。

Valdi 侧的源在 `D:\valdi\Valdi\apps\my_application_valdi`（`valdi_exported_library` 目标名
`my_application_valdi_export`，与 `System.loadLibrary(...)` 的名字必须一致）。

# Valdi resolves generated module/view classes reflectively at runtime, and the
# exported AAR ships its own consumer rules. Keep our bridge types.
-keep class com.example.myapplication.core.valdi.** { *; }
-keep interface com.example.myapplication.core.valdi.** { *; }

# Valdi 通过反射查找「生成的」模块类与根视图类（com.snap.valdi.modules.<module>.*），
# 以及我们模块工厂的实现类。release 构建开启了 minify，这些类必须保留。
-keep class com.snap.valdi.modules.myapp_dil.** { *; }
-keep class com.snap.valdi.myapp_dil.** { *; }

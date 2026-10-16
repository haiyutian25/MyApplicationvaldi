# Valdi resolves generated module/view classes reflectively at runtime, and the
# exported AAR ships its own consumer rules. Keep our bridge types.
-keep class com.example.myapplication.core.valdi.** { *; }
-keep interface com.example.myapplication.core.valdi.** { *; }

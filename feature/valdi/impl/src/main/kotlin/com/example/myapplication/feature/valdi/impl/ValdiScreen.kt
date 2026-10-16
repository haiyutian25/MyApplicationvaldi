package com.example.myapplication.feature.valdi.impl

import android.widget.Toast
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.myapplication.core.valdi.ValdiDilView

/**
 * Renders a `model_dil_v2` document with the Valdi runtime exported into this app.
 *
 * The document is pushed down as the Valdi component's view model (`document`), so the
 * Valdi side renders exactly what the host hands it; `button` nodes inside the document
 * come back through [ValdiDilView]'s `onDilAction`.
 */
@Composable
fun ValdiScreen(
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    var lastAction by remember { mutableStateOf<String?>(null) }

    Column(
        modifier = modifier
            .fillMaxSize()
            .safeDrawingPadding(),
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 4.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            TextButton(onClick = onNavigateBack) {
                Text(text = "返回")
            }
            Text(
                text = "Valdi · DIL 渲染",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold,
            )
        }

        lastAction?.let { action ->
            Surface(
                color = MaterialTheme.colorScheme.secondaryContainer,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 4.dp),
            ) {
                Text(
                    text = "Kotlin 收到 DIL 动作：$action",
                    modifier = Modifier.padding(8.dp),
                    style = MaterialTheme.typography.bodySmall,
                )
            }
        }

        ValdiDilView(
            documentJson = VALDI_DIL_DOCUMENT_JSON,
            modifier = Modifier.fillMaxSize(),
            onDilAction = { action ->
                lastAction = action
                Toast.makeText(context, "DIL: $action", Toast.LENGTH_SHORT).show()
            },
        )
    }
}

/**
 * The document handed to the Valdi component. Same shape the server sends for an
 * Intelligent UI response: a `document` node with `version` / `code` and `children`.
 */
private const val VALDI_DIL_DOCUMENT_JSON = """
{
  "type": "document",
  "version": "v2",
  "code": "myapplication-dil-demo",
  "children": [
    { "type": "heading", "children": "欢迎使用智能界面" },
    { "type": "paragraph", "children": "这段内容由 Kotlin 传入 Valdi，再由原生组件渲染；下面的按钮点击会回到 Kotlin。" },
    {
      "type": "card",
      "children": [
        { "type": "heading", "children": "今日任务" },
        { "type": "paragraph", "children": "完成你的每日计划" },
        {
          "type": "list",
          "children": [
            { "type": "list-item", "children": "阅读文档" },
            { "type": "list-item", "children": "整理项目进度" },
            { "type": "list-item", "children": "完成本周计划" }
          ]
        },
        { "type": "progress", "children": "任务完成进度", "props": { "value": 0.66 } }
      ]
    },
    { "type": "divider" },
    { "type": "button", "children": "开始使用" }
  ]
}
"""

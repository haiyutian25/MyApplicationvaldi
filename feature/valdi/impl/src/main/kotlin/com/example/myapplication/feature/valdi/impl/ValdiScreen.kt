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
    { "type": "title", "children": "东京天气" },
    {
      "type": "card",
      "children": [
        { "type": "badge", "children": "实时" },
        { "type": "title", "children": "22°C" },
        { "type": "text", "children": "晴间多云" },
        { "type": "divider" },
        {
          "type": "list",
          "children": [
            { "type": "list-item", "children": "体感温度：24°C" },
            { "type": "list-item", "children": "风速：12 km/h" },
            { "type": "list-item", "children": "湿度：55%" }
          ]
        }
      ]
    },
    { "type": "title", "children": "月度趋势" },
    {
      "type": "chart",
      "children": [
        { "type": "data", "children": "第1周:8200" },
        { "type": "data", "children": "第2周:10500" },
        { "type": "data", "children": "第3周:9200" },
        { "type": "data", "children": "第4周:13800" }
      ]
    },
    {
      "type": "grid",
      "children": [
        { "type": "card", "children": [ { "type": "caption", "children": "总收入" }, { "type": "title", "children": "$48,290" } ] },
        { "type": "card", "children": [ { "type": "caption", "children": "订单数量" }, { "type": "title", "children": "1,284" } ] }
      ]
    },
    {
      "type": "table",
      "children": [
        {
          "type": "table-row",
          "children": [
            { "type": "table-cell", "children": "转化率" },
            { "type": "table-cell", "children": "3.8%" }
          ]
        }
      ]
    },
    { "type": "button", "children": "查看详情" }
  ]
}
"""

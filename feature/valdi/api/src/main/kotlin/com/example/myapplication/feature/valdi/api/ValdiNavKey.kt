package com.example.myapplication.feature.valdi.api

import androidx.navigation3.runtime.NavKey
import kotlinx.serialization.Serializable

/**
 * Navigation contract of the Valdi feature.
 */
@Serializable
sealed interface ValdiNavKey : NavKey {
    /**
     * Screen that renders a `model_dil_v2` document with the Valdi runtime.
     */
    @Serializable
    data object Valdi : ValdiNavKey
}

/**
 * Backward-compatible alias for the Valdi route.
 */
typealias ValdiRoute = ValdiNavKey.Valdi

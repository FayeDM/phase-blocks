<?php
/**
 * Plugin Name: Phase Blocks
 * Description: A collection of Accessible Gutenberg React blocks.
 * Version: 1.0.0
 * Author: Faye Polson
 * License: GPL-2.0-or-later
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Registers all blocks in the plugin's subfolders.
function phase_blocks_register_all() {
    $blocks = array(
        'cta-block',
        // Add more blocks here as you create them
    );

    foreach ( $blocks as $block ) {
        register_block_type( __DIR__ . '/' . $block );
    }
}
add_action( 'init', 'phase_blocks_register_all' );
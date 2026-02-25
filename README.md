 Phase Blocks

**Phase Blocks** is a collection of accessible, fully self-contained Gutenberg blocks for WordPress. Each block is modular, theme-independent, and designed to be easily reusable across projects.

## Features

- Fully self-contained blocks
- SCSS for styling
- Dynamic render using PHP
- Editor-specific and front-end styles
- Easy to extend with new blocks

## Installation

1. Upload the `phase-blocks` folder to your WordPress `/wp-content/plugins/` directory.
2. Activate the plugin through the ‘Plugins’ menu in WordPress.
3. Add blocks to posts or pages via the Gutenberg editor.

## Development

1. Install dependencies:

npm install

2. Start the development build (with live reload):

npm run start

3. Build production-ready files:

npm run build

## Adding New Blocks

1. Create a new folder inside `phase-blocks/`.
2. Add `src/` and `build/` folders for JS/CSS and a `block.json` file.
3. Register the block in `phase-blocks.php` (or use auto-scan if implemented).

## License

GPL-2.0-or-later
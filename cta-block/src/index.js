import Edit from './edit';

import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';

registerBlockType(metadata.name, {
    edit: Edit,
    save: () => null, // Server-side render, if you have render.php
});

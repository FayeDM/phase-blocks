/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
  const {
    headline,
    subhead,
    buttonText,
    buttonUrl,
    screenReaderText,
  } = attributes;

  console.log('Attributes:', attributes);

  const blockProps = useBlockProps();

  return (
    <section {...blockProps} aria-labelledby="cta-headline">
      <RichText
        tagName="h2"
        id="cta-headline"
        value={headline}
        onChange={(value) => setAttributes({ headline: value })}
        placeholder={__('Your H2 Headline Here', 'phase-blocks')}
      />
	  <RichText
        tagName="p"
        value={subhead}
        onChange={(value) => setAttributes({ subhead: value })}
        placeholder={__('Content to support your headline', 'phase-blocks')}
      />
      <div className="cta-button-wrap">
        <RichText
          tagName="span"
          value={buttonText}
          onChange={(value) => setAttributes({ buttonText: value })}
          placeholder={__('Button label', 'phase-blocks')}
        />
        <URLInputButton
          url={buttonUrl}
          onChange={(url) => setAttributes({ buttonUrl: url })}
        />
      </div>
      {/* Screen reader only text editor, visually hidden */}
      <RichText
        tagName="span"
        className="scronly"
        value={screenReaderText}
        onChange={(value) => setAttributes({ screenReaderText: value })}
        placeholder={__('If you are using generic link text, replace this with more information about the topic', 'phase-blocks')}
      />

    </section>
  );
}


<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$headline = esc_html( $attributes['headline'] ?? '' );
$subhead = esc_html( $attributes['subhead'] ?? '' );
$button_text = esc_html( $attributes['buttonText'] ?? 'Read More' );
$button_url = esc_url( $attributes['buttonUrl'] ?? '#' );
$screen_reader = esc_html( $attributes['screenReaderText'] ?? '' );

$section_id = uniqid( 'cta-' );
?>

<section class="wp-block-cta-block phase-blocks-cta-block" aria-labelledby="<?php echo $section_id; ?>">
  <?php if ( $headline ) : ?>
    <h2 id="<?php echo $section_id; ?>"><?php echo $headline; ?></h2>
  <?php endif; ?>


  <?php if ( $subhead ) : ?>
    <p><?php echo $subhead; ?></p>
  <?php endif; ?>

  <div class="cta-button-wrap">
    <a href="<?php echo $button_url; ?>" class="cta-button">
		<span class="cta-button-text">
			<?php echo $button_text; ?>
		</span>
      <?php if ( $screen_reader ) : ?>
        <span class="scronly"> <?php echo $screen_reader; ?></span>
      <?php endif; ?>
    </a>
  </div>


</section>
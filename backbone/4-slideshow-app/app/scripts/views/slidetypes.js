define([
	'views/slidetypes/image',
	'views/slidetypes/snippet',
	'views/slidetypes/quote',
	'views/slidetypes/bullets'
],
function(
	ImageSlide,
  SnippetSlide,
  QuoteSlide,
  BulletsSlide
) {
  return {
    'image'		: ImageSlide,
    'snippet'	: SnippetSlide,
    'quote'		: QuoteSlide,
    'bullets'	: BulletsSlide
  };
});

//	Andrew Rodrigues
//	11/9/2015
//	Version 3.0
//	jQuery Slideshow
//	Changes background image & preloads

var galleryImages = [
	{image: "url('img/1.jpg')",title: "Icy Slide Plugin 3.0",color: '#3498db'},
	{image: "url('img/12.jpg')",title: "Modern Browser Support",color: '#2ecc71'},
	{image: "url('img/3.jpg')",title: "Easily Editable Clean Code",color: '#9b59b6'},
	{image: "url('img/4.jpg')",title: "Template & CSS Included",color: '#7f8c8d'},
];


//Decided to enter preload directly into the dom without the javascript

var i = 1;
preload = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];

$(document).ready(function() {
	for (var j = 0; j < preload.length; j++) {
		$('#preload').append('<img src="' + preload[j] + '">');
	}
});

var change = function changeImage() {
	if (i >= galleryImages.length) {
		i = 0;
	};
	var nextImage = galleryImages[i].image;
	$('#fullGallery').css('background-image', galleryImages[i].image);
	$('#title').css('color', galleryImages[i].color);
	$('#button').css('background', galleryImages[i].color);
	$('#title').text(galleryImages[i].title);
	i = i + 1;
}

$('#fullGallery').css('background-image', galleryImages[0].image);
$('#title').text(galleryImages[0].title);
$('#title').css('color', galleryImages[0].color);
$('#button').css('background', galleryImages[0].color);

setInterval(change,3000);

var minus = '<span>- </span>';
var add = '<span>+ </span>';

$('#use .toggle').each(function() {
	$(this).hide();
});

$('#use h4').prepend(minus);


$('#use h4').click(function() {
	$clicked = $(this);
	if ($(this).hasClass('open')) {
		$(this).next('div').hide('slow');
		$(this).removeClass('open');
		$(this).children().remove('span');
		$(this).prepend(minus);
	} else {
		$('#use h4').each(function() {
			if ($(this).hasClass('open')) {
				$(this).next('div').hide('slow');
				$(this).removeClass('open');
				$(this).children().remove('span');
				$(this).prepend(minus);
			}
		});
		$clicked.addClass('open');
		$clicked.children().remove('span');
		$clicked.prepend(add);
		$clicked.next('div').toggle('slow');
	}
});

// event when link clicked
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// Pindahkan Scroll
	$('html,body').animate ({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');
	
	
	e.preventDefault();
});



// Parallax effect
// About
$(window).on('load', function() {
	$('.pKiri').addClass('pShow');
	$('.pKanan').addClass('pShow');
	$('.about2').addClass('about2Show');
	
});
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	// Portofolio
	if (wScroll > $('.portofolio').offset().top - 200 ) {
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i) .addClass('show');
			}, 200 * (i+0));
		});

		
	}

});


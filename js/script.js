$(document).ready(function(){


//КНОПКА ВВЕРХ
	$("#back-top").hide();

	$(function(){

		$(window).scroll(function(){
			if ($(this).scrollTop() > 400) {
				$('#back-top').fadeIn(500);
			} else {
				$('#back-top').fadeOut(500);
			}
		});

		$('#back-top a').click(function(){
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	});

//ПОЯВЛЕНИЕ/СКРЫТИЕ ФУТЕРА


	$('#footer').css({opacity: '0.7'});

	$(function(){
		$(window).scroll(function(){

			var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

			function show_footer(){
				$('#footer').animate({bottom: '-30px'},10);
			};

			function hide_footer(){
				$('#footer').animate({bottom: '-0px'},10);
			};

			if (scrollBottom) {
				show_footer();
			} else {
				hide_footer();
			}

			
		});
	});

//ТЕКУЩИЙ ГОД В ФУТЕРЕ
	$(function(){
		var date = new Date(),
		year = date.getFullYear();
		$(".footer span").append(year);
	});
	

//ОТКРЫТЬ ИСКРЫТЬ ОКНО АВТОРИЗАЦИИ ПРИ КЛИКЕ ЗА ЕГО ПРЕДЕЛАМИ
	$(function() {
		$('#loginButton').click(function(event) {
			$('#loginWindow').toggle(100);
		});
		$(document).click(function(event) {
			if ($(event.target).closest('#loginWindow').length == 0 && $(event.target).attr('id') != 'loginButton') {
				$('#loginWindow').hide(200);
			}
		});


		$(function() {
			if ($('#loginWindow').attr('style.display') != 'none') {
				
			}

		})
		
	});

//ОТКРЫТЬ И СКРЫТЬ ОКНО РЕГИСТРАЦИИ ПРИ КЛИКЕ ЗА ЕГО ПРЕДЕЛАМИ
	$(function() {
		$('#regButton').click(function(event) {
			$('#regWindow').fadeIn(100);
			$('#overlay').fadeIn(100);
		});
		$(document).click(function(event) {
			if ($(event.target).closest('#regWindow').length == 0 && $(event.target).attr('id') != 'regButton') {
				$('#regWindow').fadeOut(100);
				$('#overlay').fadeOut(200);
			}
		});


		//$(function() {
			// if ($('#regWindow').attr('style.display') != 'none') {
				
			// }

		//})
		
	});
		

});



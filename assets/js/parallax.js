/* Parallax */
/* 
	parallax -> Nunca debe ser 1 ya que entonces el fondo y el frente iran a la misma velocidad. 
	Si es mayor de 1 el frente irá más deprisa que el fondo. 
	Si es menor de 1 el fondo irá más deprisa que el frente. 
*/
var parallax  = 3;
$(document).ready(function () {
	$(document).scroll(function () {
		
		s = $(document).scrollTop();
		/* Efecto parallax */
		$(document).scroll(function () {
			s = $(document).scrollTop();
			$("#parallax-back").css("top", Math.round(s/parallax)  + "px");
			var newheight =  parseInt($("#parallax-front").css("height").replace("px","")) - Math.round(s/3);	
			$("#parallax-back").css("height", newheight + "px" );
		})


	})
})
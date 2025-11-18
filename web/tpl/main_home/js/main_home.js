/*global tstring, page_globals, Promise, common, form_factory, data_manager, psqo_factory */
/*eslint no-undef: "error"*/

"use strict";



var main_home =  {

	background : document.querySelector('.parallax img:nth-child(1)'),
	foreground : document.querySelector('.parallax img:nth-child(2)'),
	moneda : document.querySelector('.section img:nth-child(1)'),

set_up : async function() {


	window.addEventListener("scroll", () =>{

		let scroll = window.scrollY;
		let windowHeight = window.innerHeight;
        let elementTop = this.moneda.getBoundingClientRect().top;

		this.background.style.transform = 'translateY(' + scroll * 0.5 + 'px)';

		this.foreground.style.transform = 'translateY(' + scroll * -0.6 + 'px)';

		let maxScroll = 500;
        let opacity = 1 - scroll / maxScroll;
        if(opacity < 0) opacity = 0; // nunca menor que 0
        this.background.style.opacity = opacity;

		 let fadeStart = windowHeight * 0.8; // cuando la imagen está 80% hacia abajo
            let fadeEnd = windowHeight * 0.2;   // opacidad completa cuando esté 20% desde arriba

            let opacity2 = (fadeStart - elementTop) / (fadeStart - fadeEnd);
            if(opacity2 < 0) opacity = 0;
            if(opacity2 > 1) opacity = 1;

            this.moneda.style.opacity = opacity2;


	})
}
	

}//end main_home

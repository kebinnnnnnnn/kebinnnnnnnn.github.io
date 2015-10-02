var game = 0, web = 1, mobile = 2, mobilegame = 3;

var projects = [
	{
		"name": "Tesol Certification",
		"subtitle": "An ESL (English as a Second Language) Application",
		"description": "<p>An ESL (English as a Second Language) Application by Site Group International. Created with AngularJS and Laravel framework for the RESTful API. Available on App Store and Google Play.</p>",
		"type": web,
		"bg": "tesol",
		"links": "<a target='_blank' href='http://certification.tesol.asia/#/public/login'>Tesol Certification Page</a>",
		"pics": 3
	},
	{
		"name": "Eikaiwa Test Automation Framework",
		"subtitle": "Front end Automation Testing",
		"description": "<p>This application allows programmers to automate front end testing of Eikaiwa Website. It is built using Ruby, Capybara, RSpec and Selenium. I built this when I was working for Bibo Global Opportunity. No screenshots available because it's a framework.</p>",
		"type": web,
		"links": "<a target='_blank' href='http://eikaiwa.dmm.com/'>Eikaiwa Page</a>",
		"bg": "eikaiwatest",
		"pics": 3
	},
	{
		"name": "Reiknum hraðar",
		"subtitle": "A Speed Math Training Game",
		"description": "<p>A speed-math training game for anyone with dyslexia kids. It is made with Unity and available for both Android and iOS. I developed the game mechanics and the connection of the game to MemberMouse API.</p>",
		"type": mobile,
		"links": "<a target='_blank' href='https://play.google.com/store/apps/details?id=is.betranam.reiknumhradar'>Download Here</a>",
		"bg": "reiknum",
		"pics": 3
	},
	{
		"name": "Almennbrot",
		"subtitle": "A Mathematics Learning App",
		"description": "<p>This app is for students 6-10 year old who want to master math within a year. It is the mobile version of Almennbrot website. I designed and developed the app in iOS, Android and MemberMouse API.</p>",
		"type": mobile,
		"links": "<a target='_blank' href='http://www.almennbrot.betranam.is/'>Almennbrot Website</a>",
		"bg": "almennbrot",
		"pics": 3
	},
	{
		"name": "EkoreParts",
		"subtitle": "An E-commerce App",
		"description": "<p>An E-commerce app for EkoreParts Website based in Canada. I developed the iOS version of the app and used Magento SOAP API for the web service.</p>",
		"type": mobile,
		"links": "<a target='_blank' href='http://ekoreparts.com/home'>EkoreParts Website</a>",
		"bg": "ekore",
		"pics": 3
	},
	{
		"name": "Pulse",
		"subtitle": "A mobile tapping Game",
		"description": "<p>A mobile game about tapping numbers as fast as you can. Includes a multiplayer mode so you can beat your friends!</p><p>Pulse is made with Unity and Parse.</p>",
		"links": "<a target='_blank' href='https://dl.dropboxusercontent.com/u/67049751/Pulse/Pulse.html'>Play Pulse</a>",
		"type": mobilegame,
		"bg": "pulse",
		"pics": 3
	}

];

$(document).ready(function(){

	// fade things
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.fadeIn').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).fadeTo(500,1);
            }
        }); 
    });


    // insert projects data to grid divs
	for(i = 0 ; i < projects.length; i++){
		$('#projects-grid').append('<div class="col-xs-12 col-sm-4 col-md-4" id="project'+i+'"><div class="overlay grid wow zoomIn" data-toggle="modal" href="#project-modal" alt="'+i+'"><figure class="effect-bubba"><img src="img/projects/'+ projects[i].bg +'.png" alt="img01"/><figcaption><h2>'+ projects[i].name +'</h2><p>' + projects[i].subtitle + '</p></figcaption></figure></div></div>');
		// bgurl = "url('img/projects/" + projects[i].bg + ".png')";
		// $('#project'+i).css("background-image", bgurl);
	}

	$('.overlay').click(function(){
		i = $(this).attr("alt");
		$('#project-modal-title').html(projects[i].name);
		$('#project-modal-subtitle').html(projects[i].subtitle);
		$('#project-modal-description').html(projects[i].description);
		$('#project-modal-links').html(projects[i].links);
		$('.carousel-inner').html('');
		for(x = 1; x <= projects[i].pics; x++){
			var src = "img/" + projects[i].bg + "/" + x + ".png";
			if(x == 1){
				$('.carousel-inner').append('<div class="item active"><img src="' + src + '"></div>');
			}
			else{
				$('.carousel-inner').append('<div class="item"><img src="' + src + '"></div>');
			}	
		}
	});
});
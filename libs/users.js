/*  var myCustomClass = 'customColor';
  var myCustomBgKey = 'background';
  var myCustomBackgroundColor = 'purple';
  var myCustomText = 'This is a custom text added with jQuery';
  var myAppendedText = '<div>Appended text</div>';*/

/*  setTimeout(function(){
    changeStyle('h1', 'color', 'white')
  }, 1000)

  setTimeout(function(){
    changeStyle('h1', 'background', 'red')
  }, 2000)

  setTimeout(function(){
    changeStyle('h1', 'font-size', '12px')
  }, 2000)

  setTimeout(function(){
    changeStyle('h1', 'font-size', '25px')
  }, 3000)

  setTimeout(function(){
    changeStyle('h1', 'font-size', '50px')
  }, 5000)

  setTimeout(function(){
    changeStyle('#home', 'background', 'purple')
  }, 3000)

  setTimeout(function(){
    changeText('h1', 'This is a custom text added with jQuery');
  }, 4000)
}) */

function changeStyle(selector, attr, value) {
   $(selector).css(attr, value);
}

function saveToStorage(key, value) {
  window.localStorage.setItem(key, value);
  //alert(key + ', ' + value);
}

function getFromStorage(key) {
  var text = window.localStorage.getItem(key);
  appendText('h1', text);
}

function appendText(selector, text) {
   $(selector).append(text);
}

function changeImage(myUrl) {
  $('#posts').css('background', 'url(' + myUrl + ')');
  $('#posts').css('background-attachment', 'fixed');
}

/*function loadPosts(){
  var blogPosts = [
    {
      title: 'Titlu 1',
      subtitle: 'Subtitlu 1',
      author: 'Mada1',
      date: '09.06.2017',
      article: 'This is a blog post bla bla1',
    },
    {
      title: 'Titlu 2',
      subtitle: 'Subtitlu 2',
      author: 'Mada2',
      date: '10.06.2017',
      article: 'This is a blog post bla bla2',
    },
    {
      title: 'Titlu 3',
      subtitle: 'Subtitlu 3',
      author: 'Mada3',
      date: '11.06.2017',
      article: 'This is a blog post bla bla3',
    },
    {
      title: 'Titlu 4',
      subtitle: 'Subtitlu 4',
      author: 'Mada4',
      date: '12.06.2017',
      article: 'This is a blog post bla bla4',
    },
    {
      title: 'Titlu 5',
      subtitle: 'Subtitlu 5',
      author: 'Mada5',
      date: '13.06.2017',
      article: 'This is a blog post bla bla5',
    }
  ];

  $.map(blogPosts, function (post){
    var template =  '<div>' + 
                      '<h2>' + post.title + '</h2>' +
                      '<h3>' + post.subtitle + '</h3>' +
                      '<p>' + post.author + ', <span>' + post.date + '</span></p>' +
                      '<p>' + post.article + '</p>' +
                    '</div>';
    $('#myPosts').append(template);
    console.log(post);
  });
}*/

function loadPosts() {
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/posts',
    method: 'GET'
  }).then(function(data) {
    $.map(data, function(post, index){
      var template =  '<div>' + 
                        '<h2>' + post.title + '</h2>' +
                        '<p>' + post.body + '</p>' +
                      '</div>';
    console.log(data);
    $('#myPosts').append(template);
    });
  });
}

function hideOldPosts() {
	$('#myPosts').hide();
}

$(document).ready(function(){

var root = 'http://jsonplaceholder.typicode.com';
  $.ajax({
    url: root + '/users',
    method: 'GET'
  }).then(function(data) {
	  	/*$.each(data, function (index, user) {
		  var userID =  '<p>' + user.id + '<p>' + '</br>';
		  var userName = '<p>' + user.name + '<p>' + '</br>';
		  var userUsername = '<p>' + user.username + '<p>' + '</br>';
		  var userEmail = '<p>' + user.email + '<p>' + '</br>';
		  $('#user_id').append(userID);
		  $('#user_name').append(userName);
		  $('#user_username').append(userUsername);
		  $('#user_email').append(userEmail);
		});*/
	    $.map(data, function(user, index){
	      	var template =  '<div class="div_left">' + 
		      					'<p><label>User ID:' + '</label> ' + user.id + '</p>' + 
		                        '<p><label>Name:' + '</label> ' + user.name + '</p>' + 
		                        '<p><label>Username:' + '</label> ' + user.username + '</p>' +
		                        '<p><label>Email:' + '</label> ' + user.email + '</p>' +
		                        '<p><label>Address:' + '</label> ' + user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode + '</p>' +
		                        '<p><label>Phone:' + '</label> ' + user.phone + '</p>' +
		                        '<p><label>Website:' + '</label> ' + user.website + '</p>' +
		                        '<p><label>Company:' + '</label> ' + user.company.name + ', ' + user.company.catchPhrase + '</p>' + 
	                         '</div>';
	        var template2 = '<div class="div_right">' + 
		        				'<p><label>User ID: '  + '</label> ' + user.id + '</p>' +
		                        '<p><label>Name:' + '</label> ' + user.name + '</p>' + 
		                        '<p><label>Username:' + '</label> ' + user.username + '</p>' +
		                        '<p><label>Email:' + '</label> ' + user.email + '</p>' +
		                        '<p><label>Address:' + '</label> ' + user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode + '</p>' +
		                        '<p><label>Phone:' + '</label> ' + user.phone + '</p>' +
		                        '<p><label>Website:' + '</label> ' + user.website + '</p>' +
		                        '<p><label>Company:' + '</label> ' + user.company.name + ', ' + user.company.catchPhrase + '</p>' + 
	                        '</div>';
	        //2 template-uri - unul pozitionare stanga / unul dreapta
	        if (index % 2 === 0) {
	        	$('#users').append(template);
	        } else{
	        	$('#users').append(template2);
	        }

	        //Elementele 2 si 7 aiba background rosu
	        $('#users div').eq(1).css('background', 'pink');
			$('#users div').eq(6).css('background', 'pink');
	    });

	    //Selectati toti children din #users
	    var children = $('#users').children();
			console.log('#USERS CHILDREN FIRST TASK', children);

		//selectati first/last element*/
		var first = $('#users div').first();
			console.log('#USERS FIRST ELEMENT', first);
		var last = $('#users div').last();
			console.log('#USERS LAST ELEMENT', last);

		//Faceti append de text pe fiecare children adaugand textul 'Text appended'
		$(children).append('Text appended');

		//La click show/hide al 2 lea children din #users
		$('#showPosts').click(function(){
			$('#users').children().eq(1).show();
		});
		$('#hidePosts').click(function(){
			$('#users').children().eq(1).hide();
		});
		$('#loadPosts').click(function(){
			$('#users').children().eq(1).toggle();
		});

		//Toti children ai unui children sa aiba culoarea albastru, cu exceptia elementului 2
		$('#users').children().eq(2).children(':not(:nth-child(2))').css('background', 'blue');

		/*Inlocuiti text la primul child element din childrenii #users*/
		$(children).eq(0).children().eq(0).html('Inlocuiti text la primul child element din childrenii #users');

		//Cautati #users si afisati in consola: children, siblings, parent;
		var users = $('body').find('#users');
		console.log('#USERS CHILDREN', users.children());
		console.log('#USERS SIBLINGS', users.siblings());
		console.log('#USERS PARENT', users.parent());

		//toate div-urile ce au pozitionare dreapta sa le aplicati bg rosu fin jquery
	  	setTimeout(function(){
	    	$('#users div:odd').css('background-color', 'red');
	  	}, 3000);
	});

	//la incarcarea paginii sa animati h1, si template-urile fiecare avand setTimeout de 1 sec.
	setTimeout(function(){
    	$('.headline h1').fadeTo('slow', 0.25);
    	$('.headline h1').effect('shake', 'slow');
  	}, 1000)

  	setTimeout(function(){
		$('#users div').fadeTo('slow', 1);
  	}, 1000)

  	setTimeout(function(){
    	$('.headline h1').fadeTo('slow', 1);
  	}, 2000)

  	//h1 animate text
  	$('#h1_from_left').animate({"margin-left": '0'}, 1500);

  	//h3 animate text
  	$('#h3_from_top').animate({"margin-top": '0'}, 1000);

  	//show-hide scroll to top button
	$("#scroll_to_top").hide(); // hide on page load
	$(window).bind('scroll', function(){
	    if($(this).scrollTop() > 800) { // show after 800 px of user scrolling
	      $("#scroll_to_top").slideDown("slow");
	    } else {
	      $("#scroll_to_top").slideUp("slow");
	    }
	});

	//scroll to top effect
	$("a[href='#posts']").click(function(evt) {
	  evt.preventDefault();
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	});

	//tooltip
	  $('#scroll_to_top').tooltip({animation: true});

	//script for the arrow down
	$("#scroll-icon").hover(
	    function() {
	        $("#scroll-text").fadeToggle("slow");
	    },
	    function() {
	        $("#scroll-text").fadeOut("slow");
	});

	//scroll down effect
	$("a[href='#intro']").click(function(ev) {
	  ev.preventDefault();
	  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
	});
});

//creati o functie ce pe un event de click sa navigheze pe 'http://google.com' ca si referinta cautati pe internet window.location
function goToGoogle() {
	window.location.href = "http://google.com";
}
//in meniu pe fiecare 'a' sa aveti o functie ce va permite sa navigati de la pagina la pagina
function changePages(page) {
  $('.menu-item a').attr('href', page);
}


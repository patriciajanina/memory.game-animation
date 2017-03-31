
$(document).ready(function() {

  //timer
  var sec = 180;
  var timer = setInterval(function() {
      $('#hideMsg span').text(sec--);
      if (sec == -1) {
          $('#hideMsg').fadeOut('fast');
          clearInterval(timer);
      }
  }, 1000);
//time over animation
  setTimeout(function(){
    $('#picbox').delay(1000).fadeOut(400,function(){
      $('.section4').fadeIn(400);
      finished()
      $('body').css('background','#b3dced');
    })
  }, 180000);

var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;
var Source = "#boxcard";

var ImgSource = [
  "./images/zamek1.png",
  "./images/small1..png",
  "./images/small10.png",
  "./images/small3.png",
  "./images/small4.png",
  "./images/small5.png",
  "./images/small6.png",
  "./images/small7.png",
  "./images/small8.png",
  "./images/small9.png",
  "./images/small13.png",
  "./images/small13.png",
  "./images/small14.png",
  "./images/small14.png",
    "./images/small10.png",
];
//random
function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	ImgThis = $(Source + " div:first-child");
  	for (var z = 0; z < ImgAll.length; z++) {
  	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);

		$("#" + id + " img").slideDown('fast');

  		if (ImgOpened == "") {
  			BoxOpened = id;
  			ImgOpened = $("#" + id + " img").attr("src");
  			setTimeout(function() {
  				$(Source + " div").bind("click", OpenCard)
  			}, 0);
    		} else {
    			CurrentOpened = $("#" + id + " img").attr("src");
      			if (ImgOpened != CurrentOpened) {
      				setTimeout(function() {
      					$("#" + id + " img").slideUp('fast');
      					$("#" + BoxOpened + " img").slideUp('fast');
      					BoxOpened = "";
      					ImgOpened = "";
      				}, 400);
			     } else {
      				$("#" + id + " img").parent().css("visibility", "hidden");
      				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
      				ImgFound++;
      				BoxOpened = "";
      				ImgOpened = "";
      			}
	setTimeout(function() {
			$(Source + " div").bind("click", OpenCard)
			}, 400);
	}
		Counter++;
		$("#counter").html("" + Counter);
//if won animation
		if (ImgFound == ImgSource.length) {
    // location.href = "../gamex/index.html"
    $('#picbox').fadeOut(0 , function(){
      $('.section1').fadeIn(0);
    });
    $('.section4').remove();
    $('#hideMsg').remove();
    $('body').css('background','#b3dced');
    finished();
    }
	}
}
$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	});
}
	$(Source + " div").click(OpenCard);
	ShuffleImages();
});
// animation
function finished(){
$('.tex4').delay(2000)
  $('.tex4').animate({opacity:'0'},1800,function(){
    $('.littlewheel').animate({opacity:'0'},500,function(){
     $('.littlewheel2').animate({opacity:'1'},500,function(){
       $('.tex5').animate({opacity:'1'},500,function(){
         $('.play').animate({opacity:'1'});
         })
       })
    })
  })
}

});

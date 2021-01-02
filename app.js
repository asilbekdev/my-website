$(document).ready(function() {
    $("#faq1").click(function() {
        $("#faq1 .panel").slideToggle(500);
    });

    $("#faq2").click(function() {
        $("#faq2 .panel").slideToggle(500);
    });

    $("#faq3").click(function() {
        $("#faq3 .panel").slideToggle(500);
    });

    $("#faq1 h4, #faq2 h4, #faq3 h4").mouseenter(function () {
        $(this).css("color", "#2196f3");
    });

    $("#faq1 h4, #faq2 h4, #faq3 h4").mouseleave(function () {
        $(this).css({"color":"#fff", "cursor": "pointer"});
    })
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
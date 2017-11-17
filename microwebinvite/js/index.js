$("h2").lettering();
      
// hack to get animations to run again
$("h2").click(function() { 
  var el = $(this),  
     newone = el.clone();
  el.before(newone);
  el.remove();

}); 
  
  
var text = $("#jquerybuddy"),
numLetters = text.find("span").length;

function randomBlurize() {
text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
  .animate({
    'textShadowBlur': Math.floor(Math.random()*25)+4,
    'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'

  });
  function animLoop( render, element ) {
    var running, lastFrame = +new Date;
    function loop( now ) {
        // stop the loop if render returned false
        if ( running !== false ) {
            requestAnimationFrame( loop, element );
            running = render( now - lastFrame );
            lastFrame = now;
        }
    }
    loop( lastFrame );
}
// Call itself recurssively
setTimeout(randomBlurize, loop);
} // Call once
randomBlurize();
jQuery(document).ready(function(){
    jQuery(".titleWrapper").addClass("ready");
    
jQuery(".titleWrapper h1").each(function(){
    var fullString;
    var characters = jQuery(this).text().split("");
    
    $this = jQuery(this);
    $this.empty();
    $.each(characters, function (i, el) {
        if(el == " "){el = "&nbsp;"};
    $this.append("<span>" + el + "</span");
    });
        
});
    
});

$(document).ready(function() {
    var f = document.getElementById('Foo');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);

});
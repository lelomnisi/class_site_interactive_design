var scr=$(window).width();
var density = 24;

function random(max){
  return Math.floor(Math.random()*max);
}

function drawObj(){
  var id=random(scr); 
  var x=random(scr); 
  var y=random(scr); 
  var col=[random(255),random(128),random(64)];
  
  $('body').prepend('<div id="'+id+'" style="top: '+y+'px; left: '+x+'px; background-color: rgb('+col[0]+','+col[1]+','+col[2]+');"></div>');
  
  $('#'+id).animate({
    width: id,
    height: id,
    top: (y-(id/2)),
    left: (x-(id/2)),
    opacity: 0
  },id*16,function(){
    drawObj();
    $(this).remove();
  });
}

$(document).ready(function(){
  for(i=0;i<density;i++){
    drawObj();
  }
});
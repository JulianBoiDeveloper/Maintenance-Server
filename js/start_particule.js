
// Mise à jour des particules
var  update;
update = function() {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

$("#server-click").mouseover(function() {
  this.style.scale = 1.1;
  this.style.transform = "translate(-67,5px,-90px)";
});
$("#server-click").mouseout(function() {
  this.style.scale = 1;
  this.style.transform = "translate(-75px,-100px)";
});
var interServ = false;
// EUROPE,AMERIQUE,ASIE
var interInternation = [false,false,false];
$("#server-click").click(function() {
    if(interServ == false){
      interServ=true;
      $(".lines").fadeIn("slow");

    }else{
      interServ=false;
      $(".lines").fadeOut("slow");
      interInternation[0] = false;
      interInternation[1] = false;
      interInternation[2] = false;
      $(".sub_menu01").fadeOut("slow");
      $(".sub_menu02").fadeOut("slow");
      $(".sub_menu03").fadeOut("slow");
    }
});

$("#btn-amerique").click(function() {
  if(interInternation[0] == false){
    interInternation[0] = true;
    $(".sub_menu03").fadeIn("slow");
  }
  else{
      interInternation[0] = false;
      $(".sub_menu03").fadeOut("slow");
  }
});
$("#btn-europe").click(function() {
  if(interInternation[1] == false){
    interInternation[1] = true;
    $(".sub_menu01").fadeIn("slow");
  }
  else{
      interInternation[1] = false;
      $(".sub_menu01").fadeOut("slow");
  }
});
$("#btn-asie").click(function() {
  if(interInternation[2] == false){
    interInternation[2] = true;
    $(".sub_menu02").fadeIn("slow");
  }
  else{
      interInternation[2] = false;
      $(".sub_menu02").fadeOut("slow");
  }
});

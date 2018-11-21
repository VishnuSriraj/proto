var div = document.getElementById("change");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("hey1");

h1.onclick=function(){
  changeim();
}

function changeim()
{
  change.src="../assets/images/Proto contents/17.1 Smart Dehuller/mup.jpg"
}
h2.onclick=function(){
  changeim2();
}

function changeim2()
{
  change.src="../assets/images/Proto contents/18.1 Gloveit/mup.jpg"
}
h3.onclick=function(){
  changeim3();
}

function changeim3()
{
  change.src="../assets/images/Proto contents/18.2 napkin/mup.jpg"
}

$(function(){
 
  $('#h1').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_1').hide();
    return false;
  });
  
  $('#h2').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_2').hide();
    return false;
  });
  
  $('#h3').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_3').hide();
    return false;
  });
});
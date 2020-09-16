for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
    var button=this.innerHTML;
    makeSound(button);
     buttonAnimation(button);

    }
  );
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(button){
  switch(button){
    case "w":
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
    break;
    case "W":
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "A":
      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "s":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "S":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "d":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "D":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "j":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "J":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "k":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "K":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "l":
      var tom1=new Audio("crash.mp3");
      tom1.play();
    break;

    case "L":
      var tom1=new Audio("crash.mp3");
      tom1.play();
    break;
  }
}

function buttonAnimation(key){
  console.log(key);
var active=document.querySelector("."+key);
active.classList.add("pressed");

setTimeout(function(){
  active.classList.remove("pressed");
},100);
}

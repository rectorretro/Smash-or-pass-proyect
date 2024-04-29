var x = document.getElementById("myAudio")
var bol = true
function play_pause(){
  if(bol===true){
    x.play();
    bol = false
  }else{
    x.pause();
    bol = true
  }
}

  
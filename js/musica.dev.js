var x = document.querySelector("#myAudio")
var bol = true
const play_pause = () =>{
  if(bol===true){
    x.play();
    x.loop = true;
    bol = false
  }else{
    x.pause();
    bol = true
  }
}

  
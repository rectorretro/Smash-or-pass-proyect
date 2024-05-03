var x = document.querySelector("#myAudio")
var bol = true
const play_pause = () =>{
  if(bol===true){
    x.play();
    bol = false
  }else{
    x.pause();
    bol = true
  }
}

  
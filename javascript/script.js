const audio = document.getElementById("audio");
const time_past = document.getElementById("time-past");
const time_left = document.getElementById("time-left");
const fill = document.getElementById("fill");
const fill_btn = document.getElementById("fill-btn");

let played = false;

function play_and_pause(){
    if (played){
        audio.pause();
        document.getElementById("play-pause").src = "images/music-play-play-button-svgrepo-com (1).svg";
        played = false;
    }else{
        audio.play();
        document.getElementById("play-pause").src = "images/media-player-music-pause-svgrepo-com.svg";
        played = true;
    }

}

function change_format(time){
    let minute = parseInt(time / 60);
    let seconds = parseInt(time - (minute * 60));

    if(seconds > 9){
        return minute.toString() + ":" + seconds.toString();
    }else{
        return minute.toString() + ":0" + seconds.toString();
    }
}

function next_5(){
    if (audio.currentTime + 5 > audio.duration){
         audio.currentTime = audio.duration;
    }else audio.currentTime += 5;
}

function back_5(){
    if (audio.currentTime - 5 < 0){
         audio.currentTime = 0;
    }else audio.currentTime -= 5;
}


slider("volume", "volume");
slider("time-line", "time-line", function(){audio.pause()}, function(){if (played) audio.play();});

audio.addEventListener("timeupdate",function(){
    fill.style.width = (audio.currentTime * 100 / audio.duration) + "%";
    fill_btn.style.left = (audio.currentTime * 100 / audio.duration) + "%";
    time_past.innerText = change_format(audio.currentTime);
    time_left.innerText = "-" + change_format(audio.duration - audio.currentTime);

});
const music=document.querySelector('audio')
const img = document.querySelector('img');
const play=document.getElementById("play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("previous");
const next=document.getElementById("next");

const progress=document.getElementById('progress');
const progress_bar=document.getElementById('progress_bar');

const songs=[{
    name:"song1",
    title:"Ae Dil Hai Mushkil ",
    artist:" Arijit Singh",
    images:"arijit1"
},
{
    name:"song2",
    title:"Alote Chol ",
    artist:"Debayan Banerjee",
    images:"imag1"
},
{
    name:"song3",
    title:"Saiyaara",
    artist:"Mohit Chauhan,Sohail Sen And Tarannum Malik",
    images:"imag2"
},
{
    name:"song4",
    title:"Phir Bhi Tumko Chaahunga",
    artist:" Arijit Singh",
    images:"arijit3"
}
]

isPlaying=false;

const musicPlay = ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    const progress = audio.currentTime / audio.duration * 100;
    document.querySelector('#progress').style.width = progress + '%';
    
}

const musicPause=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause" ,"fa-play");
    img.classList.remove("anime");
}

play.addEventListener("click", ()=>{
    if(isPlaying){
        musicPause();
    }else{
        musicPlay(); 
    }
})

const loadSong =(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    artist.textContent=songs.artist;
    music.src ="music/" + songs.name +".mp3";
    img.src ="images/" +songs.images+".jpg";

}
songsIndex=0;
const nextSong =()=>{
    songsIndex = (songsIndex +1)% songs.length;
    loadSong(songs[songsIndex])
    musicPlay();
}
const prevSong =()=>{
    songsIndex = (songsIndex -1 +songs.length)%songs.length;
    loadSong(songs[songsIndex])
    musicPlay();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

//Time Prgress Bars
music.addEventListener('timeupdate',updatePrgress);

///updatePrgress
function updatePrgress(e) {
    const {duration,currentTime} =e.srcElement;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width =`${progressPercent}%`;
}

//click on progress_bar

progress_bar.addEventListener('click',setProgress);

// Set progress bar


function setProgress(e) {
    const width =this.clientWidth;
    const clickX = e.offsetX;
    const duration =music.duration;

    music.currentTime=(clickX/width)*duration;
}

music.addEventListener('ended', nextSong);
// /55555555555555555555555555555555555




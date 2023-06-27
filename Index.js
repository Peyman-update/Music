

let musics = [
  {
    name: " Pedar Khandeh ",
    cover: "./img/Pedar-Khande2.jpg",
    audio: new Audio("./music/Moein Z - Pedar Khandeh (128).mp3"),
  },

  {
    name: " Azize Khaterat",
    cover: "./img/Kheili-Baram-Azize-Khaterat1.jpg",
    audio: new Audio("./music/Mohammad Alizadeh - Kheili Baram Azize Khaterat (128).mp3"),
  },

  {
    name: " Jaye To Khalie ",
    cover: "./img/Reza-Amiri-Jaye-To-Khalie.jpg",
    audio: new Audio("./music/Reza Amiri - Jaye To Khalie (128).mp3"),
  },

  {
    name: " Nabashe Ro Dastet ",
    cover: "./img/Satin-Daram-Havaye-Masti.jpg",
    audio: new Audio("./music/Satin-Nabashe-Roo-Dastet(128).mp3"),
  },

  {
    name: " Irane Man ",
    cover: "./img/Irane-Man.jpg",
    audio: new Audio("./music/Satin-Irane-Man-.mp3"),
  },
];

let nameMusic = document.querySelector("#music_name");
let coverMusic = document.querySelector("#music_cover");
let timeMusic = document.querySelector("#music_time");
let prePlayer = document.querySelector("#preBtn");
let nextPlayer = document.querySelector("#nextBtn");
let player = document.querySelector("#playBtn");
let intger ;

// get audio and set picture , title Music

let currentMusic = 0;

let audio = musics[currentMusic].audio;

coverMusic.src = musics[currentMusic].cover;

nameMusic.innerHTML = musics[currentMusic].name;



// set max timeMusic with max any audioes

audio.addEventListener('canplay' , ()=>{
  timeMusic.max = audio.duration
  
})




// updata timeMusic value

audio.addEventListener('timeupdate' , ()=>{
  timeMusic.value = audio.currentTime;
})

// Manipulate timeMusic value by the user

timeMusic.addEventListener('input' , ()=>{
  audio.currentTime = timeMusic.value

})

// play Music

player.addEventListener('click' , ()=>{

  if (audio.paused) {
    
    audio.play()
    coverMusic.style.animationPlayState = 'running'
    player.classList.replace('fa-play' , 'fa-pause')

    // change icon play and stop animation after End music
    audio.addEventListener('timeupdate' , ()=>{
      if (audio.currentTime == audio.duration) {
        coverMusic.style.animationPlayState = 'paused'
        player.classList.replace("fa-pause", "fa-play");
      }
    // End
     })
  } else if(audio.played){
       audio.pause();
       coverMusic.style.animationPlayState = 'paused'
       player.classList.replace("fa-pause", "fa-play");
  }

})

// change Music by perviweBtn and nextBtn

prePlayer.addEventListener("click", () => {
  change("pre");
});

nextPlayer.addEventListener("click", () => {
  change("next");
});

function change(state) {
  audio.pause();
  timeMusic.value = 0;
  coverMusic.style.animationPlayState = "paused";
  player.classList.replace("fa-pause", "fa-play");
  audio.currentTime = 0;

  if (state == 'next') {
    
    if (currentMusic == musics.length -1) 
        currentMusic = 0
     else 
        currentMusic+=1   
}

else if (state !=='next') {
    if (currentMusic == 0) 
        currentMusic = musics.length - 1
     else 
        currentMusic-=1
}

// set audio and set cover , name audio According to currentMusic

audio = musics[currentMusic].audio;

coverMusic.src = musics[currentMusic].cover;

nameMusic.innerHTML = musics[currentMusic].name;

audio.addEventListener("timeupdate", () => {
    timeMusic.value = audio.currentTime;
  });
 
}


/* 

RACHEL 

1.mp3 i_ll_be_there_for_you_ 
  song: I´ll Be There For You
  artist: The Rembrandts
  album: LP
  year: 1995

2.mp3 i_go_blind 
  song: I Go Blind 
  artist: Hootie and the Blowfish
  album: Cracked Rear View
  year: 1994

3.mp3 madonna_take_a_bow_ 
  song: Take A Bow 
  artist: Madonna
  album: Bedtime Stories
  year: 1994

4.mp3 eric_carmen_all_by_myself_ 
  song: All By Myself 
  artist: Céline Dion
  album: Falling into You
  year: 1996

PHOEBE

5.mp3 friends_smelly_cat 
  song: Smelly Cat
  artist: Phoebe Buffay and the Hairballs
  album: Smelly cat 
  year: 1999

6.mp3 eve_ft_gwen_stefani_let_me_blow_ya_mind 
  song: Let Me Blow Ya Mind 
  artist: Eve ft. Gwen Stefani
  album: Scorpion
  year: 2001


7.mp3 frank_sinatra_night_and_day_ 
  song: Night and Day
  artist: Frank Sinatra
  album: Night and Day
  year: 1962

8.mp3 trouble_with_boys 
  song: Trouble With the Boys 
  artist: Audio Idols
  album: Let's Hear It for the Girls
  year: 1995


CHANDLER 

9.mp3 the_tokens_the_lion_sleeps_tonight 
  song: The Tokens The The Lion Sleeps Tonight
  artist: The Tokens
  album: RCA Victor
  year: 1961

10.mp3 david_bowie_space_ Space 
  song: Space Oddity
  artist: David Bowie
  album: Space
  year: 1969

11.mp3 eric_clapton_wonderful_tonight_ 
  song: Wonderful Tonight
  artist: Eric Clapton
  album: Slowhand
  year: 1977

12.mp3 u2_with_or_without_U 
  song: With or Without You 
  artist: U2
  album: The Joshua Tree
  year: 1987


EXTRA SONGS 
13.mp3 copacabana_  
  song: Copacabana
  artist: Barry Manilow
  album: Even Now
  year: 1978

14.mp3 sir_mix_a_lot_baby_got_back_
  song: Baby Got Back
  artist: Sir Mix-a-Lot
  album: Mack Daddy
  year: 1992

15.mp3 tony_bennett_the_way_you_look_tonight_ 
  song: The Way You Look Tonight
  artist: Tony Bennett
  album: Long Ago and Far Away
  year: 1997

*/



//let app;
let song, songIndex;
let sliderRate;
let sliderPan;
let sliderVolume;
const playlist0 = [];
const playlist1 = [];
const playlist2 = [];



const songsData= [
  //RACHEL 
  {
    name: "Ill Be There For You",
    file: "songs/1.mp3",
    img: "imgs/rachel1_mp3.png"
  },
  {
    name: "I Go Blind ",
    file: "songs/2.mp3",
    img: "imgs/rachel2_mp3.png"
  },
  {
    name: "Take A Bow ",
    file: "songs/3.mp3",
    img: "imgs/rachel3_mp3.png"
  },
  {
    name: "All By Myself",
    file: "songs/4.mp3",
    img: "imgs/rachel4_mp3.png"
  },
  //PHOEBE
  {
    name: "Smelly Cat",
    file: "songs/5.mp3",
    img: "imgs/phoebe1_mp3.png"
  },
  {
    name: "Let Me Blow Ya Mind",
    file: "songs/6.mp3",
    img: "imgs/phoebe2_mp3.png"
  },
  {
    name: "Night and Day",
    file: "songs/7.mp3",
    img: "imgs/phoebe3_mp3.png"
  },
  {
    name: "Trouble With the Boys ",
    file: "songs/8.mp3",
    img: "imgs/phoebe4_mp3.png"
  },
  //CHANDLER
  {
    name: "The Tokens The Lion Sleeps Tonight",
    file: "songs/9.mp3",
    img: "imgs/chandler1_mp3.png"
  },
  {
    name: "Space Oddity",
    file: "songs/10.mp3",
    img: "imgs/chandler2_mp3.png"
  },
  {
    name: "Wonderful Tonight",
    file: "songs/11.mp3",
    img: "imgs/chandler3_mp3.png"
  },
  {
    name: "With or Without You ",
    file: "songs/12.mp3",
    img: "imgs/chandler4_mp3.png"
  },
  
];

// function preload () {
//   song = loadSound ("songs/2.mp3")
// }

let songFiles = [];
let main;
let screenLanding;
let screenChoosePlaylists;
let screenRachelsPlaylist;
let screenPhoebesPlaylist;
let screenChandlersPlaylist;
let screenPremiumPlaylist;

 function preload() {
  screenLanding = loadImage ("imgs/landing.png");
  screenChoosePlaylists = loadImage ("imgs/choosePlaylists.png");
  screenRachelsPlaylist = loadImage("imgs/rachelsPlaylist.png");
  screenPhoebesPlaylist = loadImage("imgs/phoebesPlaylist.png");
  screenChandlersPlaylist = loadImage("imgs/chandlersPlaylist.png");
  screenPremiumPlaylist = loadImage("imgs/premiumPlaylists.png");
   
  songFiles = songsData.map(({file, img}) => {
     return {
       songFile: loadSound(file),
       imgFile: loadImage(img),
       name: file.name
     }
   })
 }

function setup() {
  screen = 0;
  createCanvas(1512, 982);
  //main = new Main(songsData, songFiles);
  //song = loadSound ("songs/8.mp3", loaded)
  sliderVolume = createSlider(0, 1, 0.5 , 0.01);
  //sliderRate = createSlider(0, 3, 1 , 0.01);
  //sliderPan = createSlider(0, 1, 0.5 , 0.01);
  //app = new App();
  songFiles.forEach((song, index) => {
    if(index < 4) playlist0.push(song);
    else if(index < 8 ) playlist1.push(song);
    else playlist2.push(song);
  })
}

function loaded (){
  //song.setVolume(0.5);
}

function draw() {
  background(220);
  
  switch (screen) {
    case 0:
    image (screenLanding, 0,0,1512, 982);    
        break; // landing 
    case 1:
    image (screenChoosePlaylists, 0,0,1512, 982);    
        break; // choose 
    case 2:
      image (screenRachelsPlaylist, 0,0,1512, 982); 
      if(song && songIndex !== undefined) image(songFiles[songIndex].imgFile, 826, 300);
      break; //rachel 
    case 3:
        image (screenPhoebesPlaylist, 0,0,1512, 982);    
        if(song && songIndex !== undefined) image(songFiles[songIndex].imgFile, 826, 300, );
        break; //phoebe 
    case 4:
        image (screenChandlersPlaylist, 0,0,1512, 982);
          if(song && songIndex !== undefined) image(songFiles[songIndex].imgFile, 826, 300, );    
        break; //chandler  
    case 5:
    image (screenPremiumPlaylist, 0,0,1512, 982);    
        break; // premium 
    default:
        break;
}
text ("x:"+mouseX+ " y: " + mouseY, mouseX, mouseY);
  //song.rate(sliderPan.value());
  //song.pan(sliderRate.value());
 //CREATE A CURRECT SONG VARIABLE 
 
  //app.draw();
}

// function screenInteraction () {
// }
function mousePressed() {
  if(screen === 0) {
    if (mouseX > 1196 && mouseX < 1440 && mouseY > 840 && mouseY < 884) {
      screen = 1;
    }

  }
  
  if(screen === 1) {
    if (dist(mouseX, mouseY, 343, 440) < 90) {
      screen = 2;
    }
    
    else if (dist(mouseX, mouseY, 606, 440) < 90) {
      screen = 3;
    }
    else if (dist(mouseX, mouseY, 860, 440) < 90) {
    screen = 4;
  }
  else if (dist(mouseX, mouseY, 1120, 472) < 90) {
    screen = 5;
  }
} else {
  if (mouseX > 125 && mouseX < 355 && mouseY > 55 && mouseY < 110) {
    screen = 1;
  }
  if (dist(mouseX, mouseY, 1179, 560) < 20) {
    screen = 5;
  }   

  if(dist(mouseX, mouseY, 295, 290) < 90) {
    if(song) song.stop();
    switch(screen) {
      case 2: 
        song = playlist0[0].songFile;
        songIndex = 0;
        song.play();
        break;
      case 3: 
        song = playlist1[0].songFile;
        songIndex = 4;
        song.play();
        break;
      case 4: 
        song = playlist2[0].songFile;
        songIndex = 8;
        song.play();
        break;
    }
  }
}

if(dist(mouseX, mouseY, 542, 290) < 90) {
  if(song) song.stop();
  switch(screen) {
    case 2: 
      song = playlist0[1].songFile;
      songIndex = 1;
      song.play();
      break;
    case 3: 
      song = playlist1[1].songFile;
      songIndex = 5;
      song.play();
      break;
    case 4: 
      song = playlist2[1].songFile;
      songIndex = 9;
      song.play();
      break;
  }
}



if(dist(mouseX, mouseY, 295, 695) < 90) {
  if(song) song.stop();
  switch(screen) {
    case 2: 
      song = playlist0[2].songFile;
      songIndex = 2;
      song.play();
      break;
    case 3: 
      song = playlist1[2].songFile;
      songIndex = 6;
      song.play();
      break;
    case 4: 
      song = playlist2[2].songFile;
      songIndex = 10;
      song.play();
      break;
  }
}

if(dist(mouseX, mouseY, 542, 695) < 90) {
  if(song) song.stop();
  switch(screen) {
    case 2: 
      song = playlist0[3].songFile;
      songIndex = 3;
      song.play();
      break;
    case 3: 
      song = playlist1[3].songFile;
      songIndex = 7;
      song.play();
      break;
    case 4: 
      song = playlist2[3].songFile;
      songIndex = 11;
      song.play();
      break;
  }
}
// Funcion STOP
if(screen === 2 || 3 || 4 ) {
  if(dist(mouseX, mouseY, 1196, 740) < 40) {
    if(song) song.stop();
  }

  //pausa 
  if(dist(mouseX, mouseY, 992, 740) < 40) {
    if(song) song.pause();
  }
  //volumen
  song.setVolume(sliderVolume.value());
} 
// play

if(dist(mouseX, mouseY, 1095, 740) < 40) {
  console.log("shi")
  if(song) song.pause();
  if (song) song.play();

}
// next song

if(dist(mouseX, mouseY, 1286, 742) < 20) {
  if(song) song.stop();
  switch(screen) {
    case 2: 
      song = playlist0[0].songFile;
      songIndex = 0;
      song.play();
      break;
    case 3: 
      song = playlist1[0].songFile;
      songIndex = 4;
      song.play();
      break;
    case 4: 
      song = playlist2[0].songFile;
      songIndex = 8;
      song.play();
      break;
  }
}


}

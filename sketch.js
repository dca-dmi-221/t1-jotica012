/* 
1.mp3 i_go_blind I Go Blind 
2.mp3 i_ll_be_there_for_you_ I´ll Be There For You
3.mp3 madonna_take_a_bow_ Take A Bow 
4.mp3 the_tokens_the_lion_sleeps_tonight The Tokens The The Lion Sleeps Tonight
5.mp3 copacabana_ Copacabana 
6.mp3 david_bowie_space_ Space 
7.mp3 eric_carmen_all_by_myself_ All By Myself 
8.mp3 eric_clapton_wonderful_tonight_ Wonderful Tonight 
9.mp3 eve_ft_gwen_stefani_let_me_blow_ya_mind Let Me Blow Ya Mind 
10.mp3 frank_sinatra_night_and_day_ Night and Day
11.mp3 friends_smelly_cat Smelly Cat
12.mp3 sir_mix_a_lot_baby_got_back_ Baby Got Back
13.mp3 tony_bennett_the_way_you_look_tonight_ The Way You Look Tonight
14.mp3 trouble_with_boys Trouble With the Boys 
15.mp3 u2_with_or_without_U With or Without You 

*/



//let app;
let song;
let sliderRate;
let sliderPan;
let sliderVolume;

// function preload () {
//   song = loadSound ("songs/2.mp3")
// }

function setup() {
  createCanvas(400, 400);
  song = loadSound ("songs/8.mp3", loaded)
  sliderVolume = createSlider(0, 1, 0.5 , 0.01);
  //sliderRate = createSlider(0, 3, 1 , 0.01);
  //sliderPan = createSlider(0, 1, 0.5 , 0.01);
  //app = new App();


}

function loaded (){
  song.play();
  //song.setVolume(0.5);
}

function draw() {
  background(220);
  //song.rate(sliderPan.value());
  //song.pan(sliderRate.value());
 song.setVolume(sliderVolume.value());
  //app.draw();
}
 


 


var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("Dog.png")
  dogimg2 = loadImage("happydog.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED MAXY")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)

} 

function draw(){
 background("pink");

 for (var i = 5; i < 990; i=i+10) 
 {
 
 var dot = createSprite(i, 5, 3, 3);
 dot.shapeColor = "red";
 
 }
 for (var i = 5; i < 990; i=i+10) 
 {
 
 var dot1 = createSprite(i, 495, 3, 3);
 dot1.shapeColor = "red";
 
 }
 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot1 = createSprite(990,i, 3, 3);
 dot1.shapeColor = "red";
 
 }
 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot1 = createSprite(5,i, 3, 3);
 dot1.shapeColor = "red";
 
 }
 
 
 foodobject.display()
 
textSize(30);

textSize(17);
fill("black");
text("I am your Puppy 🐶maxy.. I am Hungry ",100,50);
fill("black");


 drawSprites();
  
 fill(255,255,254);
 textSize(15);

drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}


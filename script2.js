function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "1ANDONLY") {
     return true;
   }
   alert("That is incorrect, try again!");
   return false;
   }





var canvas = oCanvas.create({canvas: "#canvas"}); // set canvas dom to library
var domCanvas=  document.getElementById("canvas"); // assign cavavan dom
// create sprite object and splice image (300x300) in to 9 frames
var spriteLion = canvas.display.sprite({
	image: "https://hopeattack.github.io/EscapeRoomDesign/Dagon3.jpg",
	frames: [
		{ x: 0, y: 0 },
		{ x: 100, y: 0 },
		{ x: 200, y: 0 },
    { x: 0, y: 100 },
		{ x: 100, y: 100 },
		{ x: 200, y: 100 },
    { x: 0, y: 200 },
		{ x: 100, y: 200 },
		{ x: 200, y: 200 }
	],
	width: 100,
	height: 100
});
//canvas.background.set("#aaa");
for(var i=0;i<600;i+=100){
  canvas.addChild(canvas.display.line({start: { x: i, y: 0 },end: { x: i, y: 300 },stroke:"1px #ccc"}));
}
for(var i=0;i<300;i+=100){
  canvas.addChild(canvas.display.line({start: { x: 0, y: i },end: { x: 600, y: i },stroke:"1px #ccc"}));
}

// creat static arr 1 to 9 for place grid positions
var posArr = [1,2,3,4,5,6,7,8,9];
posArr.sort(function(a, b){return 0.5 - Math.random()}); // sorting array
// form a 1 to 9 frames to grid 
var spriteArr = posArr.map(function(val,index){
  return (index >= 0 && index <=2) ? spriteLion.clone({x:300+(index*100),y: 0,frame: val}) : (index >= 3 && index <=5) ? spriteLion.clone({x:300+((index - 3)*100),y: 100,frame: val}) : spriteLion.clone({x:300+((index - 6)*100),y: 200,frame: val});
});
// add all 9 slice images to canvas 
// bind click event
spriteArr.forEach(function(sprite){
  canvas.addChild(sprite); 
  sprite.addChild(canvas.display.rectangle({width: 100,	height: 100, stroke: "inside 1px rgba(ff, ff, ff, 0.5)"}));
  sprite.dragAndDrop({ 
    changeZindex:true,
    move: function () {
       if(this.x < 0){
         this.x = 0;
       }else if(this.x >500){
         this.x = 500;
       }
       this.x -= (this.x%25);
       if(this.y < 0){
         this.y = 0;
       }else if(this.y >200){
         this.y = 200;
       }
      this.y -= (this.y%25);
    },
    end: function () {
		  var posVal1,posVal2;   
      posArr = spriteArr.map(function(s){return {x:s.x,y:s.y,f:s.frame}});
      posArr.sort(function(a,b){return a.f-b.f;});
      posVal1 = spriteLion.frames.reduce(function(a,o){return a+o.x+'-'+o.y;},'');
      posVal2 = posArr.reduce(function(a,o){return a+o.x+'-'+o.y;},'');
      if(posVal1 == posVal2){
        if(posVal1 == posVal2){
         canvas.addChild(popup);          
         spriteArr.forEach(function(sprite){
          sprite.removeChildAt(0);
         });
       }
      }
    }
  });
});
var popup = canvas.display.rectangle({
	x: 300,
	y: 150,
	origin: { x: "center", y: "center" },
	width: 300,
	height: 60,
	fill: "#0794",
	stroke: "2px #0794",
	join: "round"
});
var popLabel = canvas.display.text({
	x: 0,
	y: 0,
	origin: { x: "center", y: "center" },
	align: "center",
	font: "bold 22px sans-serif",
	text: "You solved the puzzle\n The passowrd to movie on is \n 1andonly",
	fill: "#000"
});
popup.addChild(popLabel);
popup.bind("click tap", function () {
  this.remove();
  posArr = [1,2,3,4,5,6,7,8,9];
  posArr.sort(function(a, b){return 0.5 - Math.random()});
  spriteArr.forEach(function(s,i){
    s.frame = posArr[i];
    s.x += 300;
    s.addChild(canvas.display.rectangle({width: 100,	height: 100, stroke: "inside 1px rgba(ff, ff, ff, 0.5)"}));
  });
  canvas.redraw();
});
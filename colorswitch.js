var myobstacles=[];
   var outerradius=60;
   var innerradius=45;
   var startangle=0;
   var endangle=0;
   var colours=["blue","green","red","yellow"]
   var n=colours.length;
   var z=[];
   var x=300;
   var rotate=0;
   var y=60;
   var running=false;
   var i=0;
   var raf=0;
   
   

  
  
   var canvas=document.getElementById("canvas");
   var ctx=canvas.getContext('2d');
   var myobstacles=[];
  
   
   
  function startgame(){

     myobstacles.push(new obstacle);
	 myobstacles[0].randomcolor();
	 gamearea.updategamearea();
	  console.log(colours[z[0]]);
	  
  }
  
  
  
   var ball={
	  l:300,
	  m:530,
	  vy:-1.5,
	  radius:5,
	  color:"blue",
	  draw:function(){
	      ctx.beginPath();
		  ctx.arc(300,this.m,this.radius,0,Math.PI*2,true);
		  ctx.closePath();
		  ctx.fillStyle=this.color;
		  ctx.fill();
	  }
	 } 	  
		  
  
 		
  
 
  class obstacle{
  constructor(){
  this.y=60;
  this.rotate=0;
  }
   
  randomcolor(){
   
    for ( i=0;i<4;i++) 
	   {
	     
		 if(i>0)
		 {
		 z[i]=Math.floor(Math.random()*4);
		
		  while(z[i-1]==z[i]||z[i-2]==z[i]||z[i-3]==z[i]||z[i-4]==z[i])
		  z[i]=Math.floor(Math.random()*4);
		 }
		 else
		  z[i]=Math.floor(Math.random()*4);
		  
	}
  }
   drawobstacle(){
  
   for( var j=0;j<4;j++)
   {
   if(this.rotate > (Math.PI)*2)
	{
	  this.rotate=0
	}
     
     startangle=((Math.PI)*j)/2+this.rotate;
	 endangle=(Math.PI)*(j+1)/2+this.rotate;
	 ctx.strokeStyle=colours[z[j]];
	 ctx.lineWidth=10;
	 ctx.beginPath();
	 ctx.arc(x,this.y,outerradius,startangle,endangle);  
	 ctx.stroke();
	 
   }
 
 

  	  
}
}
var o=0;
var gamearea={
  updategamearea:function(){
  
     ctx.clearRect(0,0,600,600)
     if(myobstacles[0].y==600)
	 {
	
	  myobstacles=myobstacles.slice(1,);
	  myobstacles[myobstacles.length-1].randomcolor();
	  
		 
	  }	
	  if(myobstacles[0].y==350) 
	  {
	     myobstacles.push(new obstacle); 
	   
	     
	  }
	  
			  
	  canvas.addEventListener('click',function(e)
	   { 
	  	  if (!running)
	         {	 
			   running=true;
			   o=ball.m
			   ball.vy=-ball.vy;
			 }
		  else if( ball.vy>0)
		    {	  
		       o=ball.m;
              			 
			}
		  else	if(ball.vy<0)
		  {
	           ball.vy=-ball.vy;  
		       o=ball.m
		  }
	       
	   } );  
	   if (running==true)
	   {
          ball.m-=ball.vy;
		  if(ball.m<o-30)
		  {
		   console.log("hi");
		   ball.vy=-ball.vy;
          }
          if(ball.m==530)
		  {
		   running=false;	
		   console.log("hello");
		  } 	
	   }
	   if(ball.m+ball.radius==600 || ball.m+ball.radius==0)
	      ball.draw();
	     
	   	
	   
	    ball.color=colours[z[1]];
	    ball.draw();
        for( var i=0;i<myobstacles.length;i++)
	          {
	               myobstacles[i].drawobstacle();
	               myobstacles[i].y+=1;
	               myobstacles[i].rotate+=0.0175*1.75;
	          }
	 
	     raf=requestAnimationFrame(gamearea.updategamearea);  
	  
	 
	},
	 
	
	   
	   
  
  
    	  stop:function(){
	      
	  
	  }
	  
  }
  
  

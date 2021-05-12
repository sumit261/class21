class Platform {

  constructor(posx){
this.xp=posx;
this.yp=600;
this.width=random(100,500);
this.height=random([280,160]);
      this.pt = createSprite(this.xp,this.yp,this.width,this.height);
      this.pt.shapeColor = "green";
      this.pt.debug=true;


  }


}

  
  
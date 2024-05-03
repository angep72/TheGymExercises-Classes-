class Cuboid {
    constructor(length,width,height){
      this.length=length;
      this.width=width;
      this.height=height
    }
    get surfaceArea(){
        let area = 2 * (this.length * this.width + this.width * this.height + this.length * this.height)
        return area
    }
    get volume (){
     let volume = this.length*this.width*this.height;
     return volume
    }
  }
  class Cube extends Cuboid {
    constructor(length){
      super(length,length,length)
    }
    
  }
  const answer = new Cuboid (1,2,3,);
  console.log(answer.surfaceArea);
  console.log(answer.volume)
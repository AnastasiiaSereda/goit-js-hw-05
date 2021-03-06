class Car {

   static getSpecs(car) {
       
        console.log (`Max speed:${car.maxSpeed}, speed:${car.speed}, is on:${car.isOn}, distance:${car.distance}, price:${car.price}`);
    }


        constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
            this.maxSpeed = maxSpeed;
            this.speed = speed;
            this.isOn = isOn;
            this.distance = distance;
            this.price = price;
      }


      get price() {
        return this._price;
      }
    
      set price(carsPrice) {
        this._price = carsPrice;
      }
      
      turnOn() {
        this.isOn = true;
      }


      turnOff() {
      this.isOn = false;
      this.speed= 0;
    }


      accelerate(value) {
        if(this.speed + value <= this.maxSpeed){
            this.speed += value;
        }
        return this.speed;
      }
    
      
      decelerate(value) {

        if( this.speed- value > 0){
            return this.speed -= value;
        }
        return this.speed;
      }
    
      drive(hours) {
          if( this.isOn = true){
              this.distance += hours * this.speed;
          }
          return this.distance;
      }
    
    }
      
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000



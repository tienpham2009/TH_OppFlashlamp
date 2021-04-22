class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(energy) {

        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy(){
        if (this.energy > 0){
            this.energy--;
        }
    }

    chargeEnergy(){
        this.energy ++;
    }

}

class Flashlamp{
    constructor(status,battery) {
        this.status = status;
        this.baterry = battery;

    }

    setBattery(battery){
        this.baterry = battery;
    }

    getBatteryInfo(){
        return  this.baterry.getEnergy()
    }

    light(){
        if (this.status === true){
            alert('Lighting');
        }else {
            alert('Not lighting')
        }
    }

    turnOn(){
        this.baterry.decreaseEnergy();
        this.status = true;
    }

    turnOff(){
        this.status = false;
    }
}
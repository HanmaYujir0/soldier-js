const soldier = {
    name: 'Doomguy',
    health: 10 ,
    weapon: {
        weaponName: 'Double-Barreled Shotgun',
        amountOfAmmo: 2,
    },
    ammunition: 3,
    getStatus() {
        return `Имя: ${this.name}, Здоровье: ${this.health}, Оружие: ${this.weapon.weaponName}, Патроны: ${this.weapon.amountOfAmmo}/${this.ammunition}`
    },
    shoot() {
        if (this.weapon.amountOfAmmo !== 0) {
            this.weapon.amountOfAmmo -= 1;
            console.log('Звук выстрела');
        } else if(this.weapon.amountOfAmmo === 0) {
            console.log('Перезарядите оружие');
        }
    },
    reload() {
        if(this.weapon.amountOfAmmo < 2 && this.ammunition !== 0){
            this.weapon.amountOfAmmo === 2;
            this.ammunition -= 1;
            console.log('Звуки перезарядки двустволки');
        } if (this.weapon.amountOfAmmo === 2) {
            console.log('Оружие заряжено');
        } else if (this.ammunition === 0) {
            console.log('Боеприпасов не осталось')
        }
    },
    hurt() {
        if (this.health === 0) {
            console.log('Ты умер!')
        }else if (this.health--) {
            console.log('Ты ранен')
        }
    },
    healing() {
        if (this.health === 10) {
            console.log('Ты здоров!')
        }else if (this.health++) {
            console.log('Ты исцелен')
        }
    }


}
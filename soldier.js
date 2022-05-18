const soldier = {
    name: 'Doomguy',
    health: 10 ,
    weapon: {
        weaponName: 'Double-Barreled Shotgun',
        amountOfAmmo: 0,
    },
    ammunition: 45,
    getStatus() {
        return `Имя: ${this.name}, Здоровье: ${this.health}, Оружие: ${this.weapon.weaponName}, Патроны: ${this.weapon.amountOfAmmo}/${this.ammunition}`
    },
    shoot() {
        
        }
    },
    reload() {
        
    },
    injure() {

    }



}
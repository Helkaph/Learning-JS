export default class Zate {
    constructor(year, month, day) {
        this.time = new Date((+year), (+month), (+day));
    }
    getYear() {
        return this.time.getFullYear();
    }
    getMonth() {
        return this.time.getMonth();
    }
    getDay() {
        return this.time.getDate();
    }
    getDayNumb() {
        return this.time.getDay();
    }
    getDayName() {
        let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return arr[this.getDayNumb()];
    }
    getMonthName() {
        let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return arr[this.getMonth()];
    }
}

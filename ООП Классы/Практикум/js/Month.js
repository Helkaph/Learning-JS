import ZateExt from "./ZateExt.js";
export default class Month extends ZateExt {
    constructor(month) {
        if (typeof (month) === 'number') {
            let now = new Date();
            super(now.getFullYear(), month, now.getDate());
        } else {
            throw new Error('NaN');
        }
    }
    getMonth() {
        return this.time.getMonth();
    }
    getMonthName() {
        let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return arr[this.getMonth()];
    }
    getLastDay() {
        let prev = this.time;
        this.time = this.addMonths(1);
        this.time = this.diffDays(this.time.getDate());
        let res = this.time.getDate();
        this.time = prev;
        return res;
    }
    getFirstDayNumb() {
        let prev = this.time;
        this.time = this.diffMonths(1);
        let prevres = this.getLastDay();
        this.time = this.addDays(prevres - this.time.getDate() + 1);
        let res = this.time.getDay();
        this.time = prev;
        return res;
    }
    getLastDayNumb() {
        let sometime = new Date(this.time.getFullYear(), this.getMonth(), this.getLastDay());
        console.log(sometime)
        return sometime.getDay();
    }
}

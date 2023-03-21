import Zate from './Zate.js';

export default class ZateExt extends Zate {
    constructor(year,month,day) {
        super(year, month, day);
    }
    addYears(year) {
        if (typeof (year) === 'number') {
            this.time = new Date(this.getYear() + year, this.getMonth(), this.getDay());
            return this.time;
        } else {
            throw new Error('NaN');

        }
    }
    diffYears(year) {
        if (typeof (year) === 'number') {
            this.time = new Date(this.getYear() - year, this.getMonth(), this.getDay());
            return this.time;
        } else {
            throw new Error('NaN');
        }
    }
    addMonths(month) {
        if (typeof(month) === 'number') {
            this.time = new Date(this.getYear(), this.getMonth() + month, this.getDay());
            return this.time;
        } else {
            throw new Error('NaN');
        }
    }
    diffMonths(month) {
        if (typeof(month) === 'number') {
            this.time = new Date(this.getYear(), this.getMonth() - month, this.getDay());
            return this.time;
        } else {
            throw new Error('NaN');
        }
    }
    addDays(day) {
        if (typeof (day) === 'number') {
            this.time = new Date(this.getYear(), this.getMonth(), this.getDay() + day);
            return this.time;
        } else {
            throw new Error('NaN');
        }
    }
    diffDays(day) {
        if (typeof (day) === 'number') {
            this.time = new Date(this.getYear(), this.getMonth(), this.getDay() - day);
            return this.time;
        } else {
            throw new Error('NaN');
        }
    }
}

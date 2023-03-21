export default class Period {
    constructor(time1, time2) {
        this.time1 = new Date(time1[0], time1[1], time1[2]);
        this.time2 = new Date(time2[0], time2[1], time2[2]);
    }
    getSeconds() {
        let res;
        if (((this.time1.getTime() - this.time2.getTime()) / 1000) < 0) {
            res = ((this.time1.getTime() - this.time2.getTime()) / 1000) * (-1);
            return res;
        } else {
            res = (this.time1.getTime() - this.time2.getTime()) / 1000;
            return res;
        }
    }
    getMinutes() {
        let res = this.getSeconds() / 60;
        return res;
    }
    getHours() {
        let res = this.getMinutes() / 60;
        return res;
    }
    getDays() {
        let res = this.getHours() / 24;
        return res;
    }
}

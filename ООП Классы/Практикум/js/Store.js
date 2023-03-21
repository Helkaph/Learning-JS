export default class Store {
    set(key, data) {
        let obj = {};
        obj[key] = data;
        this.data = obj;
    }
    get(key) {
        if (key.indexOf('.') == (-1)) {
            return this.data[key];
        } else {
            let arr = key.split('.');
            return this.data[arr[0]][arr[1]];
        }
    }
    DataChanger(key, newdata) {
        if (key.indexOf('.') == (-1)) {
            this.data[key] = newdata;
        } else {
            let arr = key.split('.');
            this.data[arr[0]][arr[1]] = newdata;
        }
    }
    DataDeleter(key) {
        if (key.indexOf('.') == (-1)) {
            delete this.data[key];
        } else {
            let arr = key.split('.');
            delete this.data[arr[0]][arr[1]];
        }
    }
}

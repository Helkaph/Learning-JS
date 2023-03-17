let subscribers = {
    'имя события 1': [],
    'имя события 2': [],
    'имя события 3': []
}
function on(name, callback) {
    if (!subscribers[name]) {
        subscribers[name] = [];
    }

    subscribers[name].push(callback)
}
function emit(name, data) {
    if (subscribers[name]) {
        for (let callback of subscribers[name]) {
            callback(data);
        }
    }
}
setTimeout(function() {
    emit('loaded', [1, 2, 3, 4, 5]);
    
}, 3000);
on('loaded', function (arr) {
    let message = document.querySelector('#message');
    message.textContent = 'Данные массива ' + '[' + arr + ']' + ' получены';
})
on('loaded', function (arr) {
    let list = document.querySelector('#list');

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];

        list.appendChild(li);
    }
})
on('loaded', function (arr) {
 let amount  = document.querySelector('#amount');
 amount.textContent = 'Количество элементов массива = ' + arr;
})
on('loaded', function (arr) {
 let result = document.querySelector('result');
 let res = 0;

 for (let elem of arr) {
    res+= elem;
 }

 result.textContent = 'Сумма элементов массива = ' + res;
})
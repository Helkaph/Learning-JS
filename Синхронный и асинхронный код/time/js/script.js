let date = new Date;
let body = document.querySelector('body');
let hours = [];

for (let i = 0; i < 24; i++) {
    hours.push(i);
}
let minutes = [];

for (let i = 0; i < 60; i++) {
    minutes.push(i);
}

let subscribers = {
    'nextHour': [],
    'nextMinute': [],
}
function on(name, callback) {
    if (!subscribers[name]) {
        subscribers[name] = [];
    }

    subscribers[name].push(callback);
}
function emit(name, data) {
    if (subscribers[name]) {
        for (let callback of subscribers[name]) {
            callback(data);
        }
    }
}
if (date.getMinutes == 0) {
    setTimeout(function() {
        emit('nextHour', hours)
    }, 1000)
}
let button1 = document.querySelector('#NextHour');
button1.addEventListener('click', function() {
    on('nextHour', function(hour) {
        let check = date.getHours();
        let p = document.createElement('p');
        for (let i = 0; i < hours.length; i++) {
            if (check == hour[i]) {
                p.textContent = check;
            }
        }
        body.appendChild(p)
    })
})
let button2 = document.querySelector('#DayHour');
button2.addEventListener('click', function() {
    on('nextHour', function(hour) {
        let check = date.getHours();
        if (check == hour[8]) {
            let p = document.createElement('p');
            p.textContent = 'Наступил завтрак';
            body.appendChild(p)
        } else if (check == hour[12]) {
            let p = document.createElement('p');
            p.textContent = 'Наступил обед';
            body.appendChild(p);
        } else if (check == hour[15]) {
            let p = document.createElement('p');
            p.textContent = 'Наступил полдник';
            body.appendChild(p);
        }else if (check == hour[17]) {
            let p = document.createElement('p');
            p.textContent = 'Наступил ужин';
            body.appendChild(p);
        } else {
            let p = document.createElement('p');
            p.textContent = 'Время приёма пищи не наступило'
            body.appendChild(p)
        }
    })
})
setTimeout(function() {
    emit('nextMinute', minutes, hours);
}, 60000);
on('nextMinute', function(minute) {
    let time = date.getMinutes();
    for (let i = 0; i < minute.length; i++) {
        if (minute[i] - time == 15) {
            alert('Время сделать 5-ти минутный перерыв')
        }
    }
})

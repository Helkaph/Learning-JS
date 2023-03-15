let form = document.querySelector('form');
let input1 = document.querySelector('[name="num1"');
let input2 = document.querySelector('[name="num2"');
let input3 = document.querySelector('[name="num3"');

form.addEventListener('submit', function(event) {
    let searchParams = new URLSearchParams();

    searchParams.set('num1', input1.value);
    searchParams.set('num2', input2.value);
    searchParams.set('num3', input3.value);

    let path = '/handler/?' + searchParams.toString();

    let promise = fetch(path, {
        method: 'POST',
        body: new FormData(this)
    }).then(
        response => {
            return response.text();
        }
    ).then(
        text => {
            let p = document.createElement('p');
            p.textContent = 'Среднее арифметическое чисел = ' + text;
            document.body.appendChild(p);
        }
    );
    event.preventDefault();
})
// let div = document.querySelector('div');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
//     fetch('/handler/?num1=3&num2=7').then(
//         response => {
//             return response.text();
//         }
//     ).then (
//         text => {
//             div.innerHTML = text;
//         }
//     )
// })

// let i = 1;
// button.addEventListener('click', function func() {
//     if (i !== 5 && i < 6) {
//         fetch('/' + i + '.html').then(
//             response => {
//                 return response.text();
//             }
//         ).then(
//             text => {
//                 div.innerHTML = text
//             }
//         )
//     } else if (i == 5) {
//         fetch('/ajax.html').then(
//             response => {
//                 return response.text();
//             }
//         ).then(
//             text => {
//                 div.innerHTML = text
//             }
//         )
//     } else {
//         button.removeEventListener(func);
//     }
//     i++;
// })
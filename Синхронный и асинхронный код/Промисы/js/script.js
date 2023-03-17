async function func() {
let res1 = await getSmth(2);
let res2 = await getSmth(3);
let res3 = await getSmth(4);

console.log(res1 + res2 + res3);
}

func();
function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}
// function loadImage(path) {
//     return new Promise(function(resolve, reject) {
//         let image = document.createElement('img');
//         image.src = path;

//         image.addEventListener('load', function() {
//             resolve(image);
//         });
//         image.addEventListener('error', function() {
//             reject(new Error('image " ' + path + ' " load error'));
//         });
//     });
// }
// let paths = ['images/cust.svg', 'images/sbor-1.svg', 'images/c.svg']
// for (let i = 0; i < paths.length; i++) {
//     loadImage(paths[i]).then(function(image) {
//         document.body.appendChild(image);
//     }).catch(function(error) {
//         console.log(error);
//     })
// }
// function func(num) {
//     if (num > 0) {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve(num * num);
//             }, 3000);
//         });
//     } else if (num === 0) {
//         return Promise.resolve(0);
//     } else {
//         return Promise.reject('incorrect number')
//     }
// }
// let input = document.querySelector('input');
// input.addEventListener('keypress', function(event) {
//     if (event.key == 'Enter') {
//         func((+input.value)).then(function(res) {
//             console.log(res);
//         })
//     }
// })

// function prom() {
//     let random = getRandomInt(1, 10)
//     let promise = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(random);
//         }, random * 1000)
//     });
//     return promise;
// }
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let promises = [];

// for (let i = 0; i < 10; i++) {
//     promises.push(prom());
// }

// Promise.all(promises).then(function(res) {
//     let sum = 0;
//     console.log(res);
//     for (let elem of res) {
//         sum += elem;
//     }

//     console.log(sum);
// })
// Promise.race(promises).then(function(res) {
//     console.log(res);
// })
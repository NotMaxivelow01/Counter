const time = document.getElementById('counter');

let counter = 0

const timer = setInterval(() => {

    counter++
    if (counter === 10) {
        clearInterval(timer);
    }
}, 1000)
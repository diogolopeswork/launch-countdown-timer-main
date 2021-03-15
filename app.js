const countDownDate = new Date('6 July, 2021 00:00:00').getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('one').innerHTML = days;
    document.getElementById('two').innerHTML = formatTime(hours);
    document.getElementById('three').innerHTML = formatTime(minutes);
    document.getElementById('four').innerHTML = formatTime(seconds);

    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

const one = document.getElementById('one')

one.addEventListener('click', () => {
    console.log('wtf!');
});
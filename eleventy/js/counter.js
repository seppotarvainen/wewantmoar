document.addEventListener('DOMContentLoaded', () => {

    const DUE_DATE = Date.UTC(2026, 0, 31, 23, 59, 59);
    const days = document.getElementById('counter-days');
    const hours = document.getElementById('counter-hours');
    const minutes = document.getElementById('counter-minutes');
    const seconds = document.getElementById('counter-seconds');

    function startCountdown(goalDate) {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = goalDate - now;

            if (distance <= 0) {
                updateCounter(0,0,0,0);
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            updateCounter(days, hours, minutes, seconds);
        }, 1000);
    }

    function updateCounter(d, h, m, s) {
        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;
    }


    startCountdown(DUE_DATE)
});
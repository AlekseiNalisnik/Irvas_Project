const timer = (id, deadline) => {
    function addZero(number) {
        if(number <= 9) {
            return '0' + number;
        } else {
            return number;
        }
    }

    function getTimeRemaining(endTime) {
        const time = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor((time / 1000) % 60),
              minutes = Math.floor((time / 1000 / 60) % 60),
              hours = Math.floor((time / 1000 / 60 / 60) % 24),
              days = Math.floor(time / 1000 / 60 / 60 / 24);

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const timerObject = getTimeRemaining(endTime);

            days.textContent = addZero(timerObject.days);
            hours.textContent = addZero(timerObject.hours);
            minutes.textContent = addZero(timerObject.minutes);
            seconds.textContent = addZero(timerObject.seconds);

            if(timerObject.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
};

export default timer;
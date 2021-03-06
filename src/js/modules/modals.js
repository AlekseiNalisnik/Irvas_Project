import clearInputs from './clearInputs';
import calcScroll from './calcScroll';

const modals = (state) => {
    function bindModal(triggerSelector, modalSeletor, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSeletor),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if(event.target) {
                    event.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');

            windows.forEach(item => {
                item.style.display = 'none';
            });

            clearInputs();
            for (let item in state) delete state[item];
        });

        modal.addEventListener('click', (event) => {
            if(event.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                clearInputs();
                for (let item in state) delete state[item];
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
           document.querySelector(selector).style.display = "block";
           document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup ', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
};

export default modals;
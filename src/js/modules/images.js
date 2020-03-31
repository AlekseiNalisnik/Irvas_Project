import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img'),
          scroll = calcScroll();

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImage.style.width =  '' + document.body.clientWidth / 2.5 + 'px';
    bigImage.style.height =  '' + document.body.clientHeight / 15 + 'px';
    document.body.style.overflow = '';

    console.log(document.body.clientHeight);

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.marginRight = `${scroll}px`;
        }

        if(target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;
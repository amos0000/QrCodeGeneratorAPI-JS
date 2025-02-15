const wrapper = document.querySelector('.wrapper'),
qrInput = document.querySelector('.form input'),
generateBtn = document.querySelector('.form button'),
qrImg = document.querySelector('.qr-code img');


generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) {
        return;
    }
    generateBtn.innerText = 'Generating...';




    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate';
    });

});


qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        generateBtn.classList.remove('active');
    }
});
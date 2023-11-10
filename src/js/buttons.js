let btnTalk = document.querySelectorAll('.btn-talk-to-me')

btnTalk.forEach(element => {
    element.addEventListener('click', () => { window.open('https://wa.me/+5553999572334', '_blank'); });
});

let btnCurriculum = document.querySelectorAll('.btn-curriculum')

btnCurriculum.forEach(element => {
    element.addEventListener('click', () => { window.open('https://drive.google.com/file/d/1eChpnr-iZYi-8aSfp0LNGnjcSUXwHTBp/view?usp=sharing', '_blank'); });
});

const baseUrl = "https://api.whatsapp.com/send?phone=5553999572334&text="

const wppMessage = {
    0: 'Oi, gostaria de saber mais sobre o plano de UI!',
    1: 'Oi, gostaria de saber mais sobre a pesquisa UX/UI!',
    2: 'Oi, gostaria de saber mais sobre o plano de Identidade Visual!',
}

document.querySelectorAll('.btn-price').forEach((element, id) => {
    element.addEventListener('click', () => {
        const url = baseUrl + encodeURI(wppMessage[id])
        window.open(url, '_blank')
    });
});

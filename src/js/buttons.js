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

// let btnPrice = document.querySelectorAll('.btn-price')

// btnPrice.forEach((element, id) => {
//     element.addEventListener('click', () => {
//         if(id === 0){
//             window.open('https://api.whatsapp.com/send?phone=5553999572334&text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20de%20UI!', '_blank')
//         } else if(id === 1){
//             window.open('https://api.whatsapp.com/send?phone=5553999572334&text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20pesquisa%20UX%2FUI!', '_blank')
//         } else{
//             window.open("https://api.whatsapp.com/send?phone=5553999572334&text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20de%20Identidade%20Visual!", '_blank')
//         }
//     });
// });

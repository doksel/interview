function validMail() {
    event.preventDefault();
    const patternEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const myMail = doc.querySelector('.email').value;
    let valid = patternEmail.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    doc.querySelector('.message').innerHTML = output;
    return valid;
}
function validPhone() {
    event.preventDefault();
    const patternPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
    const myPhone = doc.querySelector('.tel').value;
    let valid = patternPhone.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    doc.querySelector('.message').innerHTML += '<br />'+output;
    return valid;
}
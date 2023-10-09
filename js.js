document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('agreement').value;
    let numberPhone = document.getElementById('phone').value;
    let old = document.getElementById('tentacles').value;
    let theme = document.getElementById('theme').value;

    console.log(
        `ФИО:${name}
Почта:${email}
Номер телефона:${numberPhone}
Тема консультации:${theme}
Возраст ребенка:${old}
Согласие:${agreement}
`);

    alert('Сообщение отправлено!');
    this.reset();
});

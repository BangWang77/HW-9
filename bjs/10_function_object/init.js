
document.getElementById('btnGeneration').addEventListener('click', function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicNameOutput').innerText = initPerson.patronymic;
    document.getElementById('jobOutput').innerText = initPerson.job;
})

window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicNameOutput').innerText = initPerson.patronymic;
    document.getElementById('jobOutput').innerText = initPerson.job;
};

window.onload()
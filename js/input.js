let form = document.getElementById('submit');

form.addEventListener('click', (e) => {

    naming();
    e.preventDefault();

});

function naming() {
    let females = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let males = ['Akosua', 'Adowa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let checkmale = document.getElementById("male").checked;
    let checkfemale = document.getElementById("female").checked;
    let day = document.getElementById('dbirth').value;
    let dbirth = new Date(day);
    let dDay = dbirth.getDay();
    let paragrah = document.getElementById('name');
    let intro = document.getElementById('intro');
    if (day == "") {
        alert("Please fill in the form before submission");
        return false;
    }
    console.log(dDay)
    console.log(checkfemale)
    console.log(checkmale)
    if (checkmale) {
        paragrah.innerText = (` ${males[dDay]} `);
        intro.innerText = (`Hello your name is ${males[dDay]} and you were born on a ${Days[dDay]}`)
    } else {
        paragrah.innerText = (` ${females[dDay]}`);
        intro.innerText = (`Hello your name is ${females[dDay]} and you were born on a ${Days[dDay]}`)
    }

}
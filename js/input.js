let females = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let males = ['Akosua', 'Adowa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let checkmale = document.getElementById("male").checked;
let checkfemale = document.getElementById("female").checked;
let day = document.getElementById('dbirth').ariaValueMax;
let dbirth = new Date(day);
let dDay = dbirth.getDay();
console.log(checkfemale)

let form = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    naming();

});

function naming() {

}




//     if (genderMale) {
//         alert(
//             `Your AKan name is ${males[day]} You were born on a ${daysOfWeek[day]}`
//         );
//         document.querySelector(
//             ".text-info"
//         ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.`;
//     } else if (genderFemale) {
//         alert(
//             `Your AKan name is ${females[day]} You were born on a ${daysOfWeek[day]}`
//         );
//         document.querySelector(
//             ".text-info"
//         ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.`;
//     } else { 
//         alert("Please fill  in the whole form to get back your akan name");
//     }
// });
// function naming() {
//     let gender = male;
//     let males = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'kwame']

//     let females = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

//     let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;
//     console.log(today)

//     if (gender) {
//         alert(
//             `Your AKan name is ${males[day]} You were born on a ${daysOfWeek[day]}`
//         );

//     } else if (genderFemale) {
//         alert(
//             `Your AKan name is ${females[day]} You were born on a ${daysOfWeek[day]}`
//         );

//     } else {
//         alert("Please fill  in the whole form to get back your akan name");
//     }
// }

let dBirth = document.getElementById('date').value;




console.log(dBirth);
// if (true) {
//     let version = 'ES6';
// }
// console.log(version);

var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function() {
        console.log(i);
    };
}

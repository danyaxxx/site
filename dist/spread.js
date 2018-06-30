'use strict';

// Оператор разворота (spread operator)

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

// let languages = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
var languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(languages);

/////////////////////////////////////////////////////////////////////////////////
function add(x, y, z) {
    console.log(x + y + z);
}

var nunbers = [1, 2, 3];
// add(...nunbers);
add.apply(undefined, nunbers);
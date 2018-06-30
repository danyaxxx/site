// Оператор разворота (spread operator)

let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

// let languages = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

/////////////////////////////////////////////////////////////////////////////////
function add (x, y, z) {
    console.log(x + y + z);
}

let nunbers = [1, 2, 3];
// add(...nunbers);
add(...nunbers);

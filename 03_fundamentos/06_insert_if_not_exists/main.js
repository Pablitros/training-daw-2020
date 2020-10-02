const assert = require('assert').strict;

function insertIfNotExists(array, item, position) {
    let boolChecked = false;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == item) {
            boolChecked = true;
        }
        if (boolChecked != true) {
            if (position == true) {
                array.unshift(item);
                return array;
            } else {
                array.push(item);
            return array;            }
        }
    }
    return array
}


let array = ['pera', 'manzana'];

let result = insertIfNotExists(array, 'pera', false);
assert.deepStrictEqual(result, ['pera', 'manzana']);

result = insertIfNotExists(array, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])


//Tedroy Simmons  
//lab Test-1 
//student ID: 101066725

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr)) {

            const filteredArray = arr
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

        resolve(filteredArray);
        } else {
            reject('incorrect input');
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    })

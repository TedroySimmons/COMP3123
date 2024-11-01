const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after 500ms");
        }, 500);
    })
}

const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject(new Error('Promise rejected after 500ms'));
        }, 500);
    })
}

resolvedPromise()
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    })

rejectedPromise()
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    })
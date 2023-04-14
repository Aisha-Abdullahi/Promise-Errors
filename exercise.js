
const isLogged = true;

function validateLogIn (isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    }
    else {
      reject(new Error("User is not logged in"));
    }
  });
}


function checkNumber (number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(new Error(`${number} is not a number`));
    }
    else if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    }
    else {
      reject(new Error(`${number} is less than 0.5`));
    }
  });
}



validateLogIn(isLogged)
  .then(checkNumber)
  .then((finalResult) => console.log(finalResult))
  .catch((err) => console.error(err))
  .finally(() => console.log("Complete"));



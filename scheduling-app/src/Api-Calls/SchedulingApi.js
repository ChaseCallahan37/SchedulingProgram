const url = "https://localhost:7262/api/course";

const courseData = async () => {
  const data = await fetch(url)
    .then((data) => {
      return data;
    })
    .catch((er) => {
      console.log(er);
    });
  console.log(data);
};

// courseData();

// const adder = (x, y, callBack) => {
//     const secretVariale = "secret"
//     const sum = x + y
//     callBack(sum)
// }

// adder(1, 2, (data) => {
//     console.log(data)
// })

function getJokes() {
  const jokesUrl = "https://localhost:7262/api/course";
  fetch(jokesUrl)
    .then((res) => {
      return res.json();
    })
    .then((jokes) => {
      console.log(jokes);
    })
    .catch((er) => {
      console.log("Error!!!!", er);
    });
}

getJokes();

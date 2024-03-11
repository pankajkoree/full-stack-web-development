//async

function async_content(some) {
  document.getElementById("async1").innerHTML = some;
}

async function async_function() {
  return "Async uses....";
}

async_function().then(
  function (value) {
    async_content(value);
  },
  function (error) {
    async_content(error);
  }
);

// await
async function await_content() {
  let async_var = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Await content appearing using await");
    }, 3000);
  });
  document.getElementById("await1").innerHTML = await async_var;
}

await_content();
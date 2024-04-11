
function fetchX(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

function fetchY(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
}

function addAsync() {
  return Promise.all([fetchX(), fetchY()])
    .then((res) => {
      return res[0] + res[1]
    })
}


addAsync()
  .then((res) => {
    console.log(res, 'res');
  })


const p = new Promise(function (resolve) {
  resolve(1);
})

p.then(res => {
  console.log(res, 'p then 1');

})
console.log(p);

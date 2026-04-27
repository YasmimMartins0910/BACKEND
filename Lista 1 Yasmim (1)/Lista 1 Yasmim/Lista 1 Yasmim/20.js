function contador() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}

let c = contador()
c()
c()

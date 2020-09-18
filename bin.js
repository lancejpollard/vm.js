
let MAX = 16777216
let bins = [
  [], // 1 = 32
  [], // 2 = 64
  [], // 3 = 128
  [], // 4 = 256
  [], // 5 = 512
  [], // 6 = 1024
  [], // 7 = 2048
  [], // 8 = 4096
  [], // 9 = 8192
  [], // 10 = 16384
  [], // 11 = 32768
  [], // 12 = 65536
  [], // 13 = 131072
  [], // 14 = 262144
  [], // 15 = 524288
  [], // 16 = 1048576
  [], // 17 = 2097152
  [], // 18 = 4194304
  [], // 19 = 8388608
  [0, MAX], // 20 = 16777216
]

let calls = [1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 3, 3, 4, 4, 6, 6, 8, 8]
calls.forEach(log)

function log(i) {
  console.log(`${i} = ${fetch(i)}`)
}

function fetch(n) {
  let i = n - 1
  let bin = bins[i]

  if (bin.length) {
    return bin.shift()
  }

  // find in upper bin
  let j = i + 1
  while (true) {
    let upper_bin = bins[j]
    if (upper_bin.length) {
      let x = upper_bin.shift()
      let a = x
      let b = x + (Math.pow(2, 4 + j + 1) / 2)
      j = j - 1
      let lower_bin = bins[j]
      lower_bin.push(a, b)
      break
    }
    j++
  }

  // propagate to lower bins
  while (j > i) {
    let upper_bin = bins[j]
    let x = upper_bin.shift()
    let a = x
    let b = x + (Math.pow(2, 4 + j + 1) / 2)
    j = j - 1
    let lower_bin = bins[j]
    lower_bin.push(a, b)
  }

  return bin.shift()
}

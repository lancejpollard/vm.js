
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

// const a = fetchBlock(1)
// const b = fetchBlock(1)
// const c = fetchBlock(1)
// const d = fetchBlock(1)
// const e = fetchBlock(1)
// const f = fetchBlock(1)
// const g = fetchBlock(1)
// const h = fetchBlock(1)
// const i = fetchBlock(1)
// const j = fetchBlock(1)
// returnBlockToBin(1, a)
// returnBlockToBin(1, c)
// returnBlockToBin(1, e)
// returnBlockToBin(1, g)
// returnBlockToBin(1, i)
// console.log(bins)

// 1 == fiber pointer
// 2 == stack pointer
// 3 == stack pointer size
// 4 == env pointer
// 5 == class type
// 6 == fetch
// 7 == memory free
// 8 == memory used
// 9 == garbage collection
// 10 == build
// 11 == start action
// 12 == now
// 13 == clear
var binary_store = new Uint32Array(65546)
var native_store = []
var action_store = []
var store = [ action_store, native_store, action_store ]

// allocate
//   0. If not store is initialized, initialize.
//     1. Get the max memory size.
//     2. Find nearest power of two.
//     3. Divide by four.
//     4. Store one.
//     5. Loop, split each level in half.
//   1. Fetch level
//     2. if not level, go up a level.
//     3. Keep going up until find a level.
//     4. Split down.
//     5. Grab the level node.

// build array
//   1. generate numbers based on size.
//   2. for each number...
//     1. allocate memory for array of that size.
//     2. For each item...
//       1. merge into allocation space.
//     3. Link the allocation array address.

// clear node
//   1. put back into appropriate slot.
//     1. if there are two in that slot, then merge and push up.
//     2. continue merging and bringing upward.

action(function(){})

action(function(str){
  console.log(str)
})

action(function(){
  let str = get_actual_input(1)
  action_store[0](str)
})

action(function(a, b){
  return a + b
})

action(function(){
  let a = get_actual_input(1)
  let b = get_actual_input(2)
  let c = action_store[2](a, b)
  action_store[5](c)
})

action(function(){
  // store return value
})

module.exports = start

function action(fn) {
  action_store.push(fn)
}

function get_current_fiber_pointer() {
  return binary_store[0]
}

function set_current_fiber_pointer(val) {
  binary_store[0] = val
}

function get_current_stack_pointer() {
  return binary_store[1]
}

function set_current_stack_pointer(val) {
  binary_store[1] = val
}

function get_current_stack_pointer_size() {
  return binary_store[2]
}

function get_env_storage() {
  return binary_store[3]
}

function get_class_type() {
  return binary_store[4]
}

function get_fetch_storage() {
  return binary_store[5]
}

function set_fetch_storage(val) {
  binary_store[5] = val
}

function get_memory_free() {
  return binary_store[6]
}

function get_memory_used() {
  return binary_store[7]
}

function get_garbage_collection() {
  return binary_store[8]
}

function get_build() {
  return binary_store[9]
}

function get_start_action() {
  return binary_store[10]
}

function get_current_stack_pointer() {
  return binary_store[1]
}

function get_actual_input(i) {
  let stack_pointer = get_current_stack_pointer()
  let multiplier = 2
  let position = i * multiplier
  let type_position = 3 + position
  let ref_position = 4 + position
  let type_pointer = stack_pointer + type_position
  let ref_pointer = stack_pointer + ref_position
  let type = binary_store[type_pointer]
  let ref = binary_store[ref_pointer]
  let value = store[type][ref]
  return value
}

function set_class(i) {
  binary_store[4] = i
}

function get_value(i) {
  let stack_pointer = get_current_stack_pointer()
  let env_pointer = binary_store[stack_pointer + 1]
  let multiplier = 2
  let position = i * multiplier
  let ref_pointer = env_pointer + 3 + position
  let val_pointer = binary_store[ref_pointer]
  set_fetch_storage(val_pointer)
}

function set_binary_value(i, val) {
  binary_store[i] = val
}

function get_binary_value(i) {
  return binary_store[i]
}

function set_value(i) {
  let stack_pointer = get_current_stack_pointer()
  let env_pointer = binary_store[stack_pointer + 1]
  let position = i * 2
  let type_address = env_pointer + 3 + position
  let ref_address = env_pointer + 4 + position
  let type = get_class_type()
  let fetch = get_fetch_storage()
  set_binary_value(type_address, type)
  set_binary_value(ref_address, fetch)
}

function add_native_value(val) {
  native_store.push(val)
  return native_store.length
}

function binary_store_return(val) {
  let stack_pointer = get_current_stack_pointer()
  let index = add_native_value(val)
  let return_storage_address = stack_pointer - 1
  binary_store[return_storage_address] = i
  let start_gc_list = binary_store[9]
  let end = binary_store[start_gc_list + 1]
  binary_store[end + 1] = type
  binary_store[end + 2] = i
  binary_store[end + 3] = end
}

function recycle() {
  while (true) {
    if (!binary_store[end]) {
      binary_store[end] = 2 // mark it
      end = binary_store[end + 3]
    }
  }
}

function clear_native_value(i) {
  native_store[i] = undefined
}

function call(i) {
  action_store[i]()
}

function build_activation_record(i) {
  binary_store[3] = stack_binary_store(size)
}

function shift(i) {
  set_current_stack_pointer(i)
  let fiber_pointer = get_current_fiber_pointer()
  let size = binary_store[i]
}

function clear_binary_store(address, size) {
  let m_start = get_memory_free()
  let end = binary_store[m_start + 2]
  binary_store[end + 1] = address
  binary_store[end + 2] = size
}

function stack_binary_store(i) {
  let m_start = get_memory_free()
  // binary_store[m_start] == start address
  // binary_store[m_start + 1] == size
  // binary_store[m_start + 2] == end memory block
  // binary_store[m_start + 3] == start memory block

  // if (i <= size) {
  //   let address = binary_store[m_start]
  //   binary_store[address] = start block
  //   binary_store[address + 1] = end block
  //   binary_store[m_start] = address + i
  //   return address
  // } else {
  //   let address = binary_store[m_start]
  //   binary_store[m_start] = address + size
  //   // more addresses
  // }
}

function merge_data(data) {
  if (data) {

  }
}

function push_to_native_store(v) {
  push(v[0][1], v)
}

function store_to_native_store(b, i) {
  store_array(v[0][1], b, i)
}

function fetch_from_native_store(i) {
  return fetch_from_array(v[0][1], i)
}

function build_initial_variables() {
  add_native_value(16)
  add_native_value(Math.pow(2, 16))
  add_native_value(0) // clear
  add_native_value(0) // var count = 0
}

function while_loop(a, b) {
  while (a()) {
    b()
  }
}

function start(data) {
  build_initial_variables()
  merge_data(data)
  start_next()
}

function get_now() {
  return Date.now()
}

function start_next() {
  set_binary_value(12, get_now())
  start_loop()
  setImmediate(start_next)
}

function check_loop() {
  return check_not(get_binary_value(13))
}

function check_not(x) {
  return !x
}

function start_loop() {
  while_loop(check_loop, start_loop_eval)
}

function start_loop_eval() {
  start_loop2()
  var end = get_now()
  var shift = sub(end, start)
  var clear = gt(shift, 16)
  set_binary_value(11, clear)
}

function sub(a, b) {
  return a - b
}

function gt(a, b) {
  return a > b
}

function lt(a, b) {
  return a < b
}

function check_loop2() {
  let a = get_binary_value(11)
  let b = 16
  return lt(a, b)
}

function start_loop2() {
  while_loop(check_loop2, start_loop2_eval)
}

function start_loop2_eval() {
  inc(12)
  step()
}

function setImmediate(i) {
  setImmediate(i)
}

function inc(i) {
  binary_store[i]++
}

function not(val) {
  return !val
}

function lt(a, b) {
  return a < b
}

function step() {
  let fiber = get_current_fiber_pointer()
  let waiting = store[fiber]
  if (waiting) {
    jump_to_next_fiber()
  } else {
    process_fiber_instruction()
  }
}

function jump_to_next_fiber() {
  const fiber = get_current_fiber_pointer()
  const next = store[fiber + 2]
  set_current_fiber_pointer(next)
}

function process_fiber_instruction() {
  const fiber = get_current_fiber_pointer()
  const stack_pointer = get_current_stack_pointer()
  const index = binary_store[stack_pointer]
  call(index)
  binary_store[stack_pointer] = binary_store[stack_pointer + 1]
}

function split(number) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0]
  let unit = 128
  let index = 7
  while (unit > 0) {
    while (number >= unit) {
      result[index]++
      number -= unit
    }
    index -= 1
    unit >>= 1
  }
  return result
}

function combine(bin, a, i) {
  let x = bin[a]
  bin.splice(a, 2)
  let j = i + 1
  if (j < bins.length) {
    returnBlockToBin(j, x)
  }
}

function returnBlockToBin(i, v) {
  let bin = bins[i]
  let x = getSortedIndex(bin, v)
  bin.splice(x, 0, v)
  let a = x - 1
  let b = x + 1
  let m = 2 ** (i + 5)
  if (i < bins.length - 1) {
    let combined = false
    if (a > -1) {
      let l = bin[a]
      if (l + m == v) {
        combine(bin, a, i)
        combined = true
      }
    }
    if (!combined && b < bin.length) {
      let r = bin[b]
      if (r - m == v) {
        combine(bin, x, i)
      }
    }
  }
}

function getSortedIndex(array, value) {
  let low = 0
  let high = array.length

  while (low < high) {
    let mid = (low + high) >>> 1
    if (array[mid] < value) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

function fetchBlock(i) {
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

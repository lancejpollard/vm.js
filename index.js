
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

action(function(){})

action(function(str){
  console.log(str)
})

action(function(){
  let str = get_actual_input(1)
  action_store[0](str)
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
  let front = binary_store[start_gc_list + 1]
  binary_store[front + 1] = type
  binary_store[front + 2] = i
  binary_store[front + 3] = front
}

function recycle() {
  while (true) {
    if (!binary_store[front]) {
      binary_store[front] = 2 // mark it
      front = binary_store[front + 3]
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
  let m_start = binary_store[6]
  let front = binary_store[m_start + 2]
  binary_store[front + 1] = address
  binary_store[front + 2] = size
}

function stack_binary_store(i) {
  let m_start = binary_store[6]
  binary_store[m_start] == start address
  binary_store[m_start + 1] == size
  binary_store[m_start + 2] == front memory block
  binary_store[m_start + 3] == start memory block

  if (i <= size) {
    let address = binary_store[m_start]
    binary_store[address] = start block
    binary_store[address + 1] = front block
    binary_store[m_start] = address + i
    return address
  } else {
    let address = binary_store[m_start]
    binary_store[m_start] = address + size
    // more addresses
  }
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
  set_binary_value(x, get_now())
  start_loop()
  setImmediate(start_next)
}

function check_loop() {
  return check_not(...)
}

function check_not(x) {
  return !x
}

function start_loop() {
  while_loop(check_loop, start_loop_eval)
}

function start_loop_eval() {
  start_loop2()
  var front = get_now()
  var shift = sub(front, start)
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

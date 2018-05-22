// flush the Promise resolution queue
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

export default flushPromises;

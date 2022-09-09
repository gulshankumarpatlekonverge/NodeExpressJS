
// get back the class if want custom extend from class otherwise just for emitting and handling events create instance
const EventEmiiter = require('events');
const customEmitter =  new EventEmiiter();


// on and emit methods keep track of the order additional arguments built-in modules utilize it

customEmitter.on('response', () => {
    console.log(`data received`);
})

customEmitter.on('response', () => {
    console.log(`some other logic here`);
})

customEmitter.emit('response');
console.log("##########################################");
customEmitter.on('response1', (name, id) => {
    console.log(`data received ${name} with ${id}`);
})

customEmitter.on('response1', () => {
    console.log(`some other logic here`);
})

customEmitter.emit('response1', 'john', 34);
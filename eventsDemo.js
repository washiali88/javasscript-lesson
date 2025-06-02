import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler() {
    console.log('Hello world');
}

function goodbyeHandler() {
    console.log('Goodbye World!');
}

//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');

//Error handling
myEmitter.on('error', () =>{
    console.log('An Error Occured:', err)
});

//simulate error
myEmitter.emit('error', new Error('something went wrong'));
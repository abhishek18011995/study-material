var emitter = require('events');

var screamEvent = new emitter.EventEmitter();

var hello  = function(){
    console.log('Hello Abhi!');
}

screamEvent.on('scream', hello);

screamEvent.emit('scream');
screamEvent.emit('scream');
screamEvent.emit('scream');
screamEvent.emit('scream');
var w = new Worker('testWorker.js');
w.onmessage = function(event){
    console.log(event.data);
};
var w = new Worker('assets/javascript/testWorker.js');
w.onmessage = function(event){
    console.log(event.data);
};
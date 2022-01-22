var worker = new SharedWorker("worker.js");
worker.port.start();    
Notification.requestPermission(function (permission) {
  // If the user accepts, let's create a notification
  if (permission === "granted") {
    worker.port.postMessage({name:"notification"});
  }
});

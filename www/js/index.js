function onDeviceReady(){
    screen.orientation.lock('portrait'); // Locking the orientation of the screen as the design breaks in landscape mode
}
document.addEventListener('deviceready',function(){ // 'Listens' for when the device is ready and the app is open
    onDeviceReady() // Calling the previous function
});
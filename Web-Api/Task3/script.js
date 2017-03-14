'use strict';

var dataDiv = document.querySelector('#data');

function log(message) {
  dataDiv.innerHTML = message + '<br />' + dataDiv.innerHTML;
}

function handleDeviceMotion(e) {
  var x = e.acceleration.x;
  var y = e.acceleration.y;
  var z = e.acceleration.z;
  log('Acceleration: ' + x + ', ' + y + ', ' + z);
}

if (window.DeviceMotionEvent) {
  window.ondevicemotion = handleDeviceMotion;
} else {
  log('Device Motion not supported.');
}

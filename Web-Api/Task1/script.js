navigator.getBattery().then(function(battery) {

  var time = battery.chargingTime;
  var level = (battery.level * 100);
  var charging = battery.charging;

  function getBatteryInfo (){
    if( level > 50) {
      document.body.style.backgroundColor = "green";
    } else if(level < 50 && level > 20 ){
      document.body.style.backgroundColor = "amber";
    } else if(level < 20){
      document.body.style.backgroundColor = "red";
    }
    if(battery.charging){
      alert('your device is charging');
      alert('chargingTime: '+ battery.chargingTime) 
    }
  }

  getBatteryInfo();

});











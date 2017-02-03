navigator.getBattery().then(function(battery) {

  var time = battery.chargingTime;
  var level = (battery.level * 100);
  var charging = battery.charging;

  console.log(battery);

  function getBatteryInfo (){
    if(level < 20){
      document.body.style.backgroundColor = "red";
    }else if (level < 60){
      document.body.style.backgroundColor = "orange";
    }else{
      document.body.style.backgroundColor = "green";
    }

    if(battery.charging){
      console.log('your device is charging');
      console.log('chargingTime: '+ battery.chargingTime) 
    }
  }

  getBatteryInfo();

});











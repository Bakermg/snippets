// Use this function to format the date for the url
    Date.prototype.defaultView=function(){
      var dd=this.getDate();
      if(dd<10)dd='0'+dd;
      var mm=this.getMonth()+1;
      if(mm<10)mm='0'+mm;
      var yyyy=this.getFullYear();
      return String(yyyy+"-"+mm+"-"+dd)
    }
   //Get current date from user and format for url string
    var today = new Date();
    var dated =today.defaultView();
// output is in this form yyyy/mm/dd


// use this function to get the client location
 function getUserLoc() {
     city = 33328;
   navigator.geolocation.getCurrentPosition(function (position) {
       var geocoder = new google.maps.Geocoder();
       var latLng   = new google.maps.LatLng(
           position.coords.latitude, position.coords.longitude);
       geocoder.geocode({
           'latLng': latLng
       }, function (results, status) {
           for (var i = 0; i < results[0].address_components.length; i++) {
               var address = results[0].address_components[i];
               if (address.types[0] == "postal_code") {
                   city = address.long_name;

               }
           }
       });
   });
   return false;

 }

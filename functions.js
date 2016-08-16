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
//Geolocation to find users local to center map
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var city = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(city);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }



          clearTimeout(self.mapRequestTimeout);

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(city);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

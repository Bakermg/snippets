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

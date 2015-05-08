var app = app || {};


var jobview = new app.JobView();


$(document).ready(function () {

        $('#date-info').text(function(){
            var d = new Date();
            this.innerHTML = d.toDateString();
        });



});
var app = app || {};

var sidebar = new app.SidebarRight();

$(document).ready(function () {

        $('#date-info').text(function(){
            var d = new Date();
            this.innerHTML = d.toDateString();
        });



});
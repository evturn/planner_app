var app = app || {};

app.JobView = Backbone.View.extend({
    el:'#main-name',
    JobTemplate: _.template($('#main-template').html()),
    initialize: function () {
        console.log('JobView Created');

        this.counter = 0;
        this.render();
    },
    events: {
        'click #nav-add-job': 'addjob'
    },
    render: function(){
        $(this.el).append("<ul> <li>Hello world </li></ul>");
        $(this.el).append("<button id='nav-add-job'>Add Job</button>");

    },
    addjob: function(){
        this.counter++;
        $('ul', this.el).append("<li>Job added "+ this.counter+ "</li>");
        console.log('You have added a job');
    }

});

app.jobview = new app.JobView();
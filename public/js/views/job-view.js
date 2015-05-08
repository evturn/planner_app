var app = app || {};

app.JobView = Backbone.View.extend({

    initialize: function () {

        this.render();
        console.log("New JobView Instance created!");


    },

    events: {
        'click #billables': "OnBillablesClicked"
    },

    render: function(){

        console.log("JobView Render function created!");

    },



    OnBillablesClicked: function(){
        console.log("Billables clicked");
    }

});

var jobview = new app.JobView();
jobview.render();
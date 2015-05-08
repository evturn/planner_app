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


        this.$el.html(this.model.get("title") + "<button id= 'billables'>Bill</button>");

        return this;
    },



    OnBillablesClicked: function(){
        console.log("Billables clicked");
    }

});

var jobmodel = new app.JobModel({
    title: "Job Modelskies"
});

var jobview = new app.JobView ({
    el: ".main-container",
    model: jobmodel
});

jobview.render();
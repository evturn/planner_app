var app = app || {};


app.JobModel = Backbone.Model.extend({
    defaults: {
        title: "Poseboards",
        profitability: 100,
        hourly: 18,
        desc: "Simple Website"
    },

    validate: function(attrs){
        if(!attrs.title)
            return "title is required!";
    }

});


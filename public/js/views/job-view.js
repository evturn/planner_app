var app = app || {};

app.JobView = Backbone.View.extend({
    el: "#app-right-panel",
    billablesTemplate: _.template($('#billables-template').html()),
    events: {
        'click #billables': "render"
    },
    initialize: function() {
        console.log('i\'ve been inited');
    },
    render: function(){
        console.log("New JobView Instance created!");
        var model = new app.JobModel({title: 'modelskies'});
        $('.main-container').html(this.billablesTemplate(model.toJSON()));
        return this;
    }
});
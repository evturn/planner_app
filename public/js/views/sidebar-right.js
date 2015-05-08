var app = app || {};

app.SidebarRight = Backbone.View.extend({
    el: "#app-right-panel",
    billablesTemplate: _.template($('#billables-template').html()),
    historyTemplate: _.template($('#history-template').html()),
    events: {
        'click .app-right-billables' : 'billables',
        'click .app-right-jobs'      : 'jobs',
        'click .app-right-todos'     : 'todos',
        'click .app-right-history'   : 'history',
    },
    billables: function(){
        console.log("New JobView Instance created!");
        var model = new app.JobModel({title: 'modelskies'});
        $('.main-container').html(this.billablesTemplate(model.toJSON()));
        return this;
    },
    history: function(){
        $('.main-container').html(this.historyTemplate());
        return this;
    },
});
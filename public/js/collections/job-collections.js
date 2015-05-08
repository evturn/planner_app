var app = app || {};

app.JobCollections = Backbone.Collection.extend({
    model : app.JobModel
});
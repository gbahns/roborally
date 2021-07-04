Handlebars.registerHelper("formatDate", function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
});

Handlebars.registerHelper("formatDate2", function(timestamp) {
    return moment(new Date(timestamp)).format("YYYY-MM-DD h:mm:ss a");
});

Handlebars.registerHelper("formatTimeDiff", function(timestamp1, timestamp2) {
    return moment.duration(timestamp2 - timestamp1).humanize();
});

Handlebars.registerHelper("formatPercentage", function(n) {
    return n.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3});
});

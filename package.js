Package.describe({
  summary: "A meteorite package that makes building dynamic two way forms easy"
});

Package.on_use(function(api) {
  api.use(['handlebars', 'underscore'], 'client');
  api.add_files(['helper.js', 'simpleform.js'], 'client');
  api.export('SimpleForm', 'client');
});

Package.describe({
  summary: "A meteorite package that makes building dynamic two way forms easy"
});

Package.on_use(function(api) {
  api.use(['handlebars'], 'client');
  api.add_files(['helper.js'], 'client');
});

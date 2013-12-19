Handlebars.registerHelper('select_box', function(field) {
  var html_options, options,
  _this = this;
  if (!field) {
    return;
  }
  options = "" + field + "Options";
  html_options = [];
  _.each(this[options](), function(option) {
    var selected;
    selected = _this[field] === option ? ' selected' : '';
    return html_options.push("<option" + selected + ">" + option + "</option>");
  });
  return Handlebars.SafeString("<select class='form-control' name='" + field + "'>" + (html_options.join('')) + "</select>");
});

Handlebars.registerHelper('check_box', function(field) {
  var capitalizedField, checked;
  if (!field) {
    return;
  }
  capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
  checked = this[field] === 'true' ? ' checked' : '';
  return Handlebars.SafeString("<label><input name='" + field + "' type='hidden' value='false'><input name='" + field + "' type='checkbox' value='true' " + checked + ">" + capitalizedField + "</label>");
});

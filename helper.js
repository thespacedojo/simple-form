Handlebars.registerHelper('select_box', function(field, options) {
  var html_options,
  _this = this;
  if (!field) {
    return;
  }

  if (options.hash['class']) {
    html_class = " " + options.hash['class']
  } else {
    html_class = ""
  }

  if (options.hash.optionValues && options.hash.optionValues.length > 0) {
    optionsValues = options.hash.optionValues
  } else {
    optionsValues = _this["" + field + "Options"]();
  }
  html_options = [];
  _.each(optionsValues, function(option) {
    var selected;
    selected = _this[field] === option ? ' selected' : '';
    return html_options.push("<option value='" + option + "'" + selected + ">" + _.humanize(option) + "</option>");
  });
  html = "<select class='form-control" + html_class + "' name='" + field + "'>" + (html_options.join('')) + "</select>"
  return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('check_box', function(field) {
  var capitalizedField, checked;
  if (!field) {
    return;
  }
  checked = this[field] === 'true' ? ' checked' : '';
  html = "<label><input name='" + field + "' type='hidden' value='false'><input name='" + field + "' type='checkbox' value='true' " + checked + ">" + _.humanize(field) + "</label>";
  return new Handlebars.SafeString(html);
});

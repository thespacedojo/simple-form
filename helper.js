processClass = function(optionsHash) {
  if (optionsHash['class']) {
    html_class = " " + optionsHash['class']
  } else {
    html_class = ""
  }
  return html_class
}

processLabel = function(optionsHash, field) {
  if (optionsHash['label']) {
    label_words = optionsHash['label']
  } else {
    label_words = _.humanize(field)
  }
  return label_words
}

buildLabel = function(optionsHash, field) {
  label_words = processLabel(optionsHash, field)
  return "<label for='"+ field +"'>" + label_words + "</label>"
}

/*----- HELPERS ------*/

Handlebars.registerHelper('text_field', function(field, options){
  var _this = this;
  if (!field) {
    return;
  }
  value = _this[field] || ""
  html_class = processClass(options.hash)
  html = "<input type='text' id='" + field + "' name='"+ field +"' value='"+ value +"' class='form-control"+ html_class +"'>"
  label = buildLabel(options.hash, field)
  return new Handlebars.SafeString(label + html);
});


Handlebars.registerHelper('select_box', function(field, options) {
  var html_options,
  _this = this;
  if (!field) {
    return;
  }

  html_class = processClass(options.hash)

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
  label = buildLabel(options.hash, field)
  return new Handlebars.SafeString(label + html);
});


Handlebars.registerHelper('check_box', function(field) {
  var capitalizedField, checked;
  if (!field) {
    return;
  }
  html_class = processClass(options.hash)
  checked = this[field] === 'true' ? ' checked' : '';
  label = processLabel(options.hash, field)
  html = "<label for='"+ field +"'><input id='"+ field +"' name='" + field + "' type='hidden' value='false'><input name='" + field + "' class='"+ html_class +"' type='checkbox' value='true' " + checked + ">" + label + "</label>";
  return new Handlebars.SafeString(html);
});

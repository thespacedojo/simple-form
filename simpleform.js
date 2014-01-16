SimpleForm = {
  processForm: function(target) {
    var form = {};
    array = $(target).serializeArray();
    _.each(array, function(formItem) {
      return form[formItem.name] = formItem.value;
    });
    return form;
  }
};


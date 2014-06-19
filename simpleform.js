SimpleForm = {
  processForm: function(target) {
    var form = {};
    array = $(target).serializeArray();
    _.each(array, function(formItem) {
      type = $(target).find("input[name='" + formItem.name + "']").attr('type')
      if (type === 'date') {
        return form[formItem.name] = new Date(formItem.value + " 00:00");
      } else {
        return form[formItem.name] = formItem.value;
      }
    });
    return form;
  },
  resetForm: function(target){
    $(target).trigger('reset')
  }
};


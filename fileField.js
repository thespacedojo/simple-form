Template.simpleFormFileField.helpers({
  originalFileName: function() {
    if (Session.get(this.field + 'OriginalFileName')) {
      return Session.get(this.field + 'OriginalFileName')
    } else {
      return this.object[this.field + "OriginalFileName"]
    }
  },
  file: function() {
    if (Session.get(this.field + 'Url')) {
      return Session.get(this.field + 'Url')
    } else {
      return this.object[this.field + 'Url']
    }
  }
})

Template.simpleFormFileField.events({
  'click .remove': function(event) {
    event.preventDefault()
    Meteor.call("uploaderDelete", $(event.target).parent().attr('href'), function() {
      Session.set(this.field+ 'OriginalFileName', undefined)
      Session.set(this.field + 'Url', undefined)
      $('input[name="'+ this.field +'Url"').val(undefined)
      $('input[name="'+ this.field +'OriginalFileName"').val(undefined)
      this.object[this.field + 'Url'] = undefined
      this.object[this.field + 'OriginalFileName'] = undefined
    }.bind(this))
  }
})

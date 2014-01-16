---
layout: default
username: BeDifferential
repo: simple-form
desc: Simple form building and processing for MiniMongo (minimongoid) objects.

---


# Simple Form

A meteorite package that allows you to easily use MiniMongo (minimongoid) and handlebars helpers to have data bindings between a model (one collection item) and a form element. We also have some bootstrap integration for form styling as well.

We came from a Rails background and we loved Simple Form, so we wanted to have similar functionality when working on Meteor - it just makes life easier.

## Getting started

Run:

```
mrt add simple-form
```

## Usage

### On the client

{% highlight html %}
<fieldset>
  <legend>Property Location</legend>
  <div class="form-group">
    {{text_field 'name'}}
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        {{text_field 'address' label='Street Address'}}
      </div>
    </div>
  </div>
</fieldset>
{% endhighlight %}

This will output:

{% highlight html %}
<fieldset>
  <legend>Property Location</legend>
  <div class="form-group">
    <label for="name">Name</label><input type="text" id="name" name="name" value="" class="form-control">
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="address">Street Address</label><input type="text" id="address" name="address" value="" class="form-control">
      </div>
    </div>
  </div>
</fieldset>
{% endhighlight %}

Note: We have generated proper html with labels that point to the right fields.  We also humanize the labels based on the field name, or we use what you pass in as an option.

## Roadmap

### Implemented

* ~~Text fields~~
* ~~Select boxes~~
* Check boxes
* Form processor

### Future Plans

* Text areas
* Radio buttons
* Multiple select boxes with choices saved off just below
* Possible form block level helper, if needed {{#simpleForm}}
* Validation callback hooks
* Look into automating the form saving even more than the Form processor

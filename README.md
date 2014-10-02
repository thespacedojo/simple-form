# Simple Form

A meteorite package (inspired by the Rails Simple Form gem), that allows you to easily add forms to your application. It contains boilerplate code for various form elements, and will take care of wiring up the form controls to the data for you.

## Getting started 1-2-3

### 1. Install

Install the package in your Meteor project:

```
mrt add simple-form
```

### 2. Set up the form
Now, you can use the Simple Form helpers to automatically generate inputs and labels (currently the supported input types are `text_field`, `text_area`, `select_box`, `check_box`, `file_field` and `submit_button`):

```html
<form method="POST" role="form">
	<legend>Add a project</legend>

	<div class="form-group">
		{{text_field 'title'}}
	</div>

	<div class="form-group">
		{{text_area 'description'}}
	</div>

	{{submit_button 'Add'}}
</form>
```

Will generate:

```html
<form method="POST" role="form">
	<legend>Add a project</legend>

	<div class="form-group">
		<label for="title">Title</label>
		<input type="text" id="title" name="title" value="" class="form-control">
	</div>

	<div class="form-group">
		<label for="description">Description</label>
		<textarea id="description" name="description" class="form-control"></textarea>
	</div>

	<button type="submit" class="btn btn-primary">Add</button>
</form>
```

Note that the labels have been connected to the inputs automatically, and the field names have been ‘humanized’ to create readable label text. This can of course be customized, more on that later.

### 3. Get the data

Getting out the data is quite easy as well. Because everything is in a normal form, all we need to do is pick up the `submit form` event, and pass the form (which is the target of the event) to Simple Form's process function:

```javascript
Template.projectForm.events({
	'submit form': function(event) {
		event.preventDefault();
		var data = SimpleForm.processForm(event.target);
	}
});
```

The `data` object as returned by `SimpleForm.processForm()` will contain properties for all the form fields:

```javascript
{
	title: "Readme for Simple Form",
	description: "Create a getting started guide for the Simple Form package."
}
```

The values are optimized for storing directly in MongoDB (values from date fields are converted to Javascript date objects for instance). This means you can directly pass this object to be stored in a collection.

```
Projects = new Meteor.Collection('projects');
Projects.insert(data);
```

### That's it!

This should be enough to get you started. A full list of all the options is coming in the future.

## About

A meteorite package that allows you to easily use minimongoid and handlebars helpers to have data bindings between a model (one collection item) and a form element.

We came from a Rails background and we loved Simple Form, so we wanted to have similar functionality when working on Meteor - it just makes life easier.

See more in our [documentation](http://github.differential.io/simple-form/)

```
{{file_field object=. field="pic"}}
```


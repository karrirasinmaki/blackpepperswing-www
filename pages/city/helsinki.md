---
layout: page
title: "Helsinki"
meta_title: "Helsinki"
subheadline: ""
teaser: ""
header:
  image_fullwidth: vintage-helsinki.jpg
  title: Helsinki
permalink: "/city/helsinki/"
---

<div class="row">
	{% assign courses = site.data.courses | where: 'city', 'Helsinki' %}
	{% for course in courses %}
		<div class="large-6 columns">
			<h3>{{ course.name }}</h3>
			<b>Teachers: </b>{{ course.teachers}}<br>
			<b>Dates: </b>{{ course.dates}}<br>
			<b>Time: </b>{{ course.time}}<br>
			<b>Price: </b>{{ course.price}}<br>
		</div>
	{% endfor %}
</div>

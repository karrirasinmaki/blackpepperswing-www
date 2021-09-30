---
layout: page-fullwidth

meta_title: Teachers
meta_description: Skilled. Precise. Engaging. And a bit special.

title: Our Teachers
subheadline: Skilled. Precise. Engaging. And a bit special.
image:
  src: classroom.jpg
  caption: Artist Unknown | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

sitemap:
  priority: 0.97
permalink: /teachers/
---

<div class="row"><div class="medium-8 columns medium-offset-2">

</div></div>

{% assign teachersByName = site.teachers | sort: "name"" %}
{% assign current_teachers = teachersByName | where_exp:"item","item.dances > ''" %}
{% assign past_teachers = teachersByName | where_exp:"item","item.dances == Nil" %}


## You can enjoy classes with these teachers

{% include grid.html cols=3 collection=current_teachers template='teacher-snippet.html' %}

<br />
<br />

<section class="accordion" data-accordion>
  <div class="accordion-navigation">
    <a href="#rest-of-the-teachers">Show all teachers</a>
    <div id="rest-of-the-teachers" class="content">
      You may have seen these amazing teachers as well! They, however, do not currently have any weekly classes rolling.

{% include grid.html cols=3 collection=past_teachers template='teacher-snippet.html' %}
    </div>
  </div>
</section>

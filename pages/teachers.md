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

{% assign current_teachers = site.teachers | sort: "dances", "last" %}
{% include grid.html cols=3 collection=current_teachers template='teacher-snippet.html' %}

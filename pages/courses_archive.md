---
layout: page-fullwidth
meta_description: Archive of Black Pepper Swing courses

title: Course archive
permalink: "/course-archive/"
---

Archive of Black Pepper Swing courses. See the current courses at [Courses page]({{ site.url }}/courses/).

{% assign courses = site.archive_courses | sort: 'name' | sort: 'city' | sort: 'date_start' | sort: 'type' | reverse %}
{% include itemlist-jsonld.html items=courses %}

<!--
## Workshops
{% include courses.html city='Workshop' items=site.archive_courses %}
-->

## Helsinki
{% assign courses = site.archive_courses | sort: 'name' | sort: 'city' | sort: 'date_start' | sort: 'type' | reverse %}
{% include courses.html city='Helsinki' items=courses sort=false cols=3 %}

---

## Tampere
{% assign courses = site.archive_courses | sort: 'name' | sort: 'city' | sort: 'date_start' | sort: 'type' | reverse %}
{% include courses.html city='Tampere' items=courses sort=false cols=3 %}

---

## Jyväskylä
{% assign courses = site.archive_courses | sort: 'name' | sort: 'city' | sort: 'date_start' | sort: 'type' | reverse %}
{% include courses.html city='Jyväskylä' items=courses sort=false cols=3 %}

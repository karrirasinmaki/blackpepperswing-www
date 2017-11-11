---
meta_description: Authentic swing dance courses in Helsinki, Tampere and Jyväskylä. Registration is open!

title: Courses
permalink: "/courses/"
---

{% assign courses = site.courses | sort: 'type' | sort: 'name' | sort: 'city' %}
{% include itemlist-jsonld.html items=courses %}

## Helsinki
{% include courses.html city='Workshop' %}

## Helsinki
{% include courses.html city='Helsinki' %}

---

## Tampere
{% include courses.html city='Tampere' %}

---

## Jyväskylä
{% include courses.html city='Jyväskylä' %}

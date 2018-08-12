---
meta_description: Authentic swing dance courses in Helsinki, Tampere and Jyväskylä. Registration is open!

title: Courses
permalink: "/courses/"
---

{% assign courses = site.courses | sort: 'name' | sort: 'city' | sort: 'date_start' | sort: 'type' | reverse %}
{% include itemlist-jsonld.html items=courses %}

<!--
## Workshops
{% include courses.html city='Workshop' %}
-->

## Helsinki
{% include courses.html city='Helsinki' %}

---

## Tampere
{% include courses.html city='Tampere' %}

---

## Jyväskylä
{% include courses.html city='Jyväskylä' %}


<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
[Course archive]({{ site.url }}/course-archive/)

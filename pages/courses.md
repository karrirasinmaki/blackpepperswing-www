---
meta_description: Authentic swing dance courses in Helsinki, Tampere and Jyväskylä. Registration is open!

title: Courses
permalink: "/courses/"
---

{% assign course_i = 1 %}
{% assign courses = site.courses | sort: 'type' | sort: 'name' | sort: 'city' %}
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {% for course in courses %}
    {
      "@type": "ListItem",
      "position": {{ forloop.index }},
      "url": "{{ course.url | absolute_url }}"
    }{% if forloop.last == false %},{% endif %}
    {% endfor %}
  ]
}
</script>

## Helsinki
{% include courses.html city='Helsinki' %}

---

## Tampere
{% include courses.html city='Tampere' %}

---

## Jyväskylä
{% include courses.html city='Jyväskylä' %}

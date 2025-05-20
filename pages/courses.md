---
layout: page-fullwidth

meta_description: Inspiring swing dance courses in Helsinki. New season starts August 11th.

title: Courses

disable_header: true

sitemap:
  priority: 0.99
permalink: "/courses/"

subnav:
- title: Season Autumn 2025
  url: /courses
- title: For Beginners
  url: /courses-for-beginners
- title: All courses
  url: /courses/portal
---

<section class="width-reader align-center text-center">
  <br/>
  Browse courses
  <nav title="Menu">
  {% for item in page.subnav %}
  {% if forloop.index > 1 %}| {% endif %}<a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
  </nav>
</section>

<section class="row align-items-center">
  <div class="large-5 medium-10 medium-centered columns aside pr20 t50">
  <div class="article-media">
    <div class="shadow-pop frame square cover align-center">
      <a href="/courses/portal"><img src="{{ site.urlimg }}/medium/schedule-2025-autumn-img.jpg" /></a>
    </div>
    </div>
  </div>
<section class="large-7 medium-8 medium-centered columns end" markdown="1">

### Courses / Autumn 2025

❦  Autumn 2025 at Black Pepper Swing ❦

From late summer days to winter nights. The new dance season starts August 11th and we'll have 18 weeks of classes + possible break weeks.

Registration is now open!

Autumn season highlights:

❧ Possibility to dance 3+ days per week regardless of your level  
❧ Your regular Lindy Hop, Solo Jazz, and Tap classes + specials  
❧ Weekly practice sessions and socials  

[Read more about the upcoming dance season...](/#season-info)
</section>
</section>


<template id="template-portal-event-snippet" style="display:none;">
  <div class="splide__slide slide pl10 pr10">
    {% include templates/portal-event-snippet.html %}
  </div>
</template>

<template id="template-portal-no-events" style="display:none;">
  <div class="text-center">
    <br/>
    <p>No courses on this day...</p>
    <p><a href="/courses">Check out all our courses here</a></p>
  </div>
</template>

{% assign days = "monday, tuesday, wednesday, thursday, friday, saturday, sunday" | split: ", " %}
{% for day in days %}
<div class="row width-max">
  <div class="columns medium-8 medium-centered">
    <h2>{{ site.data.language[day] }}</h2>
  </div>
  <div class="columns medium-12 pl0 pr0">
    <section id="portal-events-{{day}}-splide" class="splide carousel-cards" aria-label="{{ day }}">
      <div class="splide__track">
        <div id="portal-events-{{day}}" class="splide__list">
          <p class="text-center"><br/>Loading...</p>
        </div>
      </div>
    </section>
  </div>
</div>
{% endfor %}

<script>
var BPS_COURSES_FILTER_GROUP = "2025-autumn";
</script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/courses.js?v=20250520-001"></script>

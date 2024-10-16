---
layout: page-fullwidth

meta_description: Authentic swing dance courses in Helsinki. New courses starting thruought the year!

title: Courses

disable_header: true

sitemap:
  priority: 0.99
permalink: "/courses/"

subnav:
- title: Season Winter-Spring 2023
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

<section class="row align-items-end">
  <div class="large-5 medium-10 medium-centered columns aside pr20 t50">
    <div class="shadow-pop">
      <a href="/courses/portal">
        <img src="{{ site.urlimg }}/medium/lukkari-winter-spring-2023.png" />
      </a>
    </div>
  </div>
<section class="large-7 medium-8 medium-centered columns end" markdown="1">

### Courses / Season Winter-Spring 2023

**New season, new courses!**

You can find weekly courses for the upcoming dance season listed on this page.

Classes start on week 3 (16th of January, 2023).

All our classes are in English unless otherwise mentioned.

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


<script src="{{ site.url }}{{ site.baseurl }}/assets/js/courses.js"></script>

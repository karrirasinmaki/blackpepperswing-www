---
layout: page-fullwidth

meta_description: Authentic swing dance courses in Helsinki. New courses starting thruought the year!

title: Courses

disable_header: true

sitemap:
  priority: 0.99
permalink: "/courses/"

subnav:
- title: Season Summer 2024
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
      <img src="{{ site.urlimg }}/medium/alppilava-colorized.jpg" />
    </div>
    </div>
  </div>
<section class="large-7 medium-8 medium-centered columns end" markdown="1">

### Courses / Season Summer 2024

**Dancing till Midsummer**

You can find our summer courses listed on this page.

Our summer season has a different topic each week. Classes are on Mondays and Wednesdays, 17:30-19:00 on both days.

Week 22: Karriversary  
Week 23: Floorcraft  
Week 24: Rhythm lab  
Week 25: Swivels and swing outs  

All our classes are in English unless otherwise mentioned.

<!-- [Read more about the upcoming dance season...](/#season-info) -->

Psst... There's also 3-week Lindy Hop Beginners' course during the same time. Check it out here: [Lindy Hop Beginners 3-week course / Starting May 27th](https://holvi.com/shop/blackpepperswing/product/9f600f0b53aa10d8575449e9318fc780/)
</section>
</section>

<section class="row">
  <div class="medium-12 columns">
    <h2>Summer courses</h2>
    {% include portal-events.html category="season-2024-summer" randomize=false sort_order="asc" %}
  </div>
</section>

{% comment %}
<!-- ORIGINAL COURSES PAGE, now disabled during summer

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
var BPS_COURSES_FILTER_GROUP = "2024";
</script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/courses.js"></script>

-->
{% endcomment %}

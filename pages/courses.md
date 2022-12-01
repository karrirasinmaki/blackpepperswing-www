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


<script>
  (function() {
    function renderEvent(event, template) {
      return template.html()
        .replace(/--URL--/g, 'https://portal.blackpepperswing.com/courses/' + event.id)
        .replace(/--IMG--/g, event.meta.image_src)
        .replace(/--SUBHEADER--/g, event.meta.categories.split(',').join(' | '))
        .replace(/--HEADER--/g, event.name)
        .replace(/--EXCERPT--/g, event.meta.description)
        .replace(/--TEACHERS--/g, event.meta.teachers)
        .replace(/--DURATION--/g, event.meta.duration)
        .replace(/--DAY--/g, event.meta.day)
        .replace(/--TIME--/g, event.meta.time)
        .replace(/--PRICE--/g, event.meta.price)
        .replace(/--DATE_START--/g, new Date(event.start_date).toLocaleDateString('FI'))
        .replace(/--DATE_END--/g, new Date(event.last_date).toLocaleDateString('FI'))
    }
    function renderPortalEvents() {
      var template = $('#template-portal-event-snippet');
      /* Load events */
      $.getJSON('https://us-central1-custportal-3000.cloudfunctions.net/api/data/events', function(events) {
        events = events.sort(function(a,b) {return (a.name < b.name) && 1 || -1});
        events = events.sort(function(a,b) {return (a.start_date > b.start_date) && 1 || -1});
        for (var day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']) {
          var hasEvents = false;
          var eventsWrapper = $('#portal-events-'+day);
          eventsWrapper.html('');
          /* Loop thru single events and render row item */
          for (var i = 0, l = events.length; i<l; ++i) {
            var event = events[i];
            if ((''+event.meta.day).toLowerCase() === day) {
              eventsWrapper.append(renderEvent(event, template));
              hasEvents = true;
            }
          }
          if (!hasEvents) {
            eventsWrapper.append($('#template-portal-no-events').html());
          }
          new Splide('#portal-events-'+day+'-splide', {
            autoWidth: true, // do not set perPage nor perMove
            // perPage: 3,
            // padding: '2em',
            arrows: true,
            breakpoints: {
              920: {
                perPage: 2,
              },
              540: {
                perPage: 1,
              },
            }
          }).mount();
        }
      });
    }
    /* Wait for jQuery to load */
    var at = 100;
    var a = setInterval( function() {
      if ( typeof window.jQuery === 'undefined' ) {
        at = Math.min(1000, at*2);
        return;
      }
      clearInterval( a );
      renderPortalEvents();
    }, at );
  })();
</script>

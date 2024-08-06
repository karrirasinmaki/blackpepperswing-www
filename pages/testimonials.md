---
layout: page-fullwidth

meta_description: Black Pepper Swing offers engaging dance classes and events to uplift the soul. Swing dancing is a big passion of ours and we are glad to share that with you! We keep you inspired for years to come.

title: Courses

disable_header: true

sitemap:
  priority: 0.99
permalink: "/testimonials/"

subnav:
- title: Courses
  url: /courses
- title: Social media & links
  url: /links
- title: How to get started
  url: /start-dancing
---

<section class="width-reader align-center text-center">
  <br/>
  Shortcuts
  <nav title="Menu">
  {% for item in page.subnav %}
  {% if forloop.index > 1 %}| {% endif %}<a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
  </nav>
</section>

<br />
<h3 class="text-center">Here's what people say about Black Pepper Swing</h3>
<script src="https://widget.trustmary.com/RLS8ry2i7"></script>

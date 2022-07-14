<div itemprop="name">
  <div class="medium-10 xlarge-7 text-right">
  {% if page.subheadline %}<p class="subheadline">{{ page.subheadline }}</p>{% endif %}
  </div>
  <h1>{{ page.title }}</h1>
</div>

<div class="medium-10 xlarge-8" markdown="1">

&nbsp;

**Hello there!**

We are a swing dance school in Helsinki. We have weekly classes, workshops, and events. You can also rent our dance studios for your own practice or have a private class with us.

</div>

<div class="button-group t30">
  <a href="/courses" class="button">Courses & Registration</a>
  <a href="/studio-rental" class="button secondary">Studio rental</a>
</div>
<p class="t-15">
  <small>
    <a href="/about-us" class="secondary">About our school</a> / 
    <a href="/contact" class="secondary">Contact us</a> / 
    <a href="https://library.blackpepperswing.com/" target="_blank" class="secondary">Online library</a> / 
    <a href="/courses-for-beginners" class="secondary">Beginners courses</a> / 
    <a href="/punch-cards" class="secondary">Punch cards & drop-in</a>
  </small>
</p>

<p class="text-center t30">
  {{ site.email }}<br>
  {{ site.tel }}
</p>

<div class="text-center t15">
  <ul class="inline-list social-icons" style="display: inline-block;">
    {% for social_item in site.data.socialmedia %}
    {% if social_item.visible != false %}
    <li><a href="{{ social_item.url }}" target="_blank" class="{{ social_item.class }}" title="{{ social_item.title }}"></a></li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

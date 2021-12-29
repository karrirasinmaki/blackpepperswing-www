<div itemprop="name">
  <div class="medium-10 xlarge-7 text-right">
  {% if page.subheadline %}<p class="subheadline">{{ page.subheadline }}</p>{% endif %}
  </div>
  <h1>{{ page.title }}</h1>
</div>

<div class="medium-10 xlarge-8" markdown="1">
Spring/winter season starts January 24th.  
Registration is now open!

**Start dancing with these courses**  
No previous experience whatsoever needed.
<ul>
<li><a href="https://portal.blackpepperswing.com/courses/22l6qma5aoiihu5g7bjsk7modm">Solo Jazz & Charleston Beginners Tuesday</a> / <a href="https://portal.blackpepperswing.com/courses/2jdd9gm0r3n9mrgq9hs6rtj7f8">Thursday</a></li>
<li><a href="https://portal.blackpepperswing.com/courses/57p242v41en96e0gqs0rpkkkat">Lindy Hop Beginners Monday</a> / <a href="https://portal.blackpepperswing.com/courses/52mq51odmhnic5lava4rmb7ona">Wednesday</a></li>
<li><a href="https://portal.blackpepperswing.com/courses/1iltencvpli6optml0gl0eedj7">Tap Dance Beginners Wednesday</a></li>
<li><a href="https://portal.blackpepperswing.com/courses/4vsekklf1gph2cp7n5ajb0aqhd">Boogie Woogie Beginners Friday</a></li>
<li><a href="https://portal.blackpepperswing.com/courses/6nkn82to76js9mrc5qglta0sdr">Electro Swing Friday</a></li>
</ul>

**Already dancing?**  
<a href="{{ site.baseurl }}/courses" class="">Check out the course schedule</a> and declutter your calendar accordingly. If you are unsure what levels/courses to pick, check out <a href="https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000082224-which-courses-should-i-pick-" target="_blank">this article here</a>.

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
    <a href="/courses-for-beginners" class="secondary">Beginners courses</a> 
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

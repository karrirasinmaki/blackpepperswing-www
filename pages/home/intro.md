<div itemprop="name">
  <div class="medium-10 xlarge-7 text-right">
  {% if page.subheadline %}<p class="subheadline">{{ page.subheadline }}</p>{% endif %}
  </div>
  <h1>{{ page.title }}</h1>
</div>

<div class="medium-10 xlarge-8" markdown="1">
**Autumn season starts 22nd of August**  
Registration is now open!  
[Check out the courses and register here](/courses)
<!--
Looking for swing dance courses?  
You https://kiertonet.fi/kaikki?page=1&alue=&haku=riveria&piilota_paattyneet=0&vain_varmat_kaupat=0&pos=1649can join all our classes even during the season!  
-->

**Start dancing with these courses**  
No previous experience whatsoever needed.

- [Tap Dance Beginners on Wednesdays](https://portal.blackpepperswing.com/courses/6nj38spfklv880t9qs692k6oed)
- [Lindy Hop Beginners on Thursdays](https://portal.blackpepperswing.com/courses/4cpvbqp6gn5elri6gppnqp6j46)
- [Solo Jazz & Charleston Beginners on Thursdays](https://portal.blackpepperswing.com/courses/3qvjeeqoqkcf5vc5sn0q7sont8)
- [Check out all the beginners' courses here](/courses-for-beginners)

**Already dancing?**  
<a href="{{ site.baseurl }}/courses" class="">Check out the course schedule</a> and declutter your calendar accordingly. If you are unsure what levels/courses to pick, check out <a href="https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000082224-which-courses-should-i-pick-" target="_blank">this article here</a>. If you had a break and wish to start dancing again, check out the [Lindy Fresh-start on Mondays](https://portal.blackpepperswing.com/courses/0klpivh8e57m96ru4uv5s8e7r8)!

**Single classes and drop-in?**  
<a href="/punch-cards">Buy 10-class punch cards here</a>

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

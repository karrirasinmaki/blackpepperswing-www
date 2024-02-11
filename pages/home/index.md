---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

title: "Black Pepper Swing"
subheadline: "SWING TAP LINDY HOP CHARLESTON"

permalink: /

slider1:
- image_url: helswingi-2018-karri-ulla.jpg
  position: 93%
- image_url: helswingi-2018-andzej-essi.jpg
  position: 70%
- image_url: karri/karri-ball-heel-slide.jpg
- image_url: tanja-karri-polaroid.png
- image_url: bps-class-tanja-karri-ressu-2018-by-alessandroituarte.jpg

slider2:
- image_url: helswingi-2018-group-hug.jpg
- image_url: helswingi-2018-maria-kir.jpg
- image_url: helswingi-2018-class-high-five.jpg

slider3:
- image_url: helswingi-2018-group-hug.jpg
- image_url: helswingi-2018-maria-kir.jpg
- image_url: teemu-olga-alppitalo-floorwarming.jpg
- image_url: helswingi-2018-karri-ulla.jpg
- image_url: tanja-karri-polaroid.png
- image_url: helswingi-2018-class-high-five.jpg
- image_url: karri/karri-ball-heel-slide.jpg
- image_url: bps-class-tanja-karri-ressu-2018-by-alessandroituarte.jpg
- image_url: adrian-maria-dancing.jpg

main_ctas:
- title: Courses & Registration
  url: /courses
  type: main
- title: Lindy Hop
  url: /lindyhop
  type: secondary

secondary_ctas:
- title: About our school
  url: /about-us
- title: Contact us
  url: /contact
- title: Online library
  url: https://library.blackpepperswing.com/
- title: Beginners courses
  url: /courses-for-beginners
- title: Practical info
  url: /practical-info

featured_ctas:
- title: Are you new? Start here!
  url: /start-dancing
  img: helswingi-2018-andzej-essi.jpg
- title: Courses & Registration
  url: /courses
  img: https://firebasestorage.googleapis.com/v0/b/custportal-3000.appspot.com/o/media%2Fbps-autumn-2022.jpg?alt=media&token=19fae595-876a-41d2-8386-8ce1fc1752b7
- title: Events & Workshops
  url: /events
  img: helswingi-cover-2022-web.jpg
---

{% capture intro %}
**Hello there!**

We are a swing dance school in Helsinki. We have [weekly classes](/courses), [workshops](/events), and [events](/events). You can also [rent our dance studios](/studio-rental) for your own practice or [have a private class](/services/#private-classes) with us.
{% endcapture %}

{% capture intro_after %}
<div class="text-center">
<h2 style="margin: 0; font-weight: bold;"><a href="#season-info" style="color: inherit;">↓ s e a s o n&nbsp; &nbsp;i n f o ↓</a></h2>
<p><small>Welcome! Check out the courses and season info below.</small></p>
</div>
{% endcapture %}

{% include index_blocks/block-hero.html %}


<a id="season-info" />
<div class="t30"></div>
{% include_relative season-info.md %}
<div class="t50"></div>

<div class="show-for-medium-up"></div>
<hr class="decor skew-left" />

<section class="row b30 align-items-end">
  <div class="large-6 medium-10 medium-centered columns aside pr20">
    <div class="frame landscape shadow-pop">
      <img src="{{ 'helswingi-2018-group-picture-tommi.jpg' | imgurl,size:'medium' }}" />
    </div>
    <div class="show-for-medium-up b30"></div>
  </div>
  <div class="large-6 medium-8 medium-centered columns end t20">
    <div class="show-for-large-up t90"></div>
    <div class="t10"></div>
    <h2>Swing is <b>back</b></h2>
    <p>Spreading swing dancing in modern society means inspiring people to connect with jazz music, themselves and each other. We offer engaging, precise and fun teaching from the first course on. And we make sure your dance time is not limited to the lessons.</p>
    <p>Lindy hop, Charleston, Balboa, Shag, Boogie Woogie, Solo Jazz, and Tap Dancing - for dancers of different levels and with different aims. Get started or get better. <a href="{{ site.baseurl }}/courses" class="">Check which courses would suit you.</a></p>
  </div>
</section>

<section class="row width-max">
  <div class="medium-12 columns slick-padded">
  {% assign dances = site.dances | sort: "order" | where: "featured","true" %}
  {% include carousel-slick.html slidesToShow=3 centerMode="true" initialSlide=0 adaptiveHeight="true" arrows="true" dots="true" collection=dances template="dance-excerpt.html" %}
  </div>
</section>

<div class="t90 b60"></div>

<hr class="decor skew-x underlay" />

<section class="row b30 t-30">
  <div class="show-for-medium-up medium-6 columns aside">
    <!-- TODO: fetch from slider2 -->
    <div class="frame square cover shadow-pop">
      <img src="{{ page.slider2[0].image_url | imgurl,size:'medium' }}" />
    </div>
    <br />
    <div class="row">
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ page.slider2[1].image_url | imgurl,size:'medium' }}" />
        </div>
      </div>
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ page.slider2[2].image_url | imgurl,size:'medium' }}" />
        </div>
      </div>
    </div>
  </div>
  <div class="medium-6 columns end">
    <div class="show-for-small-only width-medium align-center">
      <h2 class="color-contrast">How to<br/><span class="l15"></span> join the fun?</h2>
      <div class="slick-carousel frame-container square shadow-pop">
        {% for img in page.slider2 %}
        <div>
          <div class="frame square cover">
            <img src="{{ img.image_url | imgurl,size:'medium' }}" style="object-position: {{ img.position | default: "center" }}" />
          </div>
        </div>
        {% endfor %}
      </div>
    </div>

    <div class="show-for-medium-up">
      <h2 class="color-contrast">How to<br/><span class="l15"></span> join the fun?</h2>
    </div>

    <div class="t90"></div>
    <p>We focus on teaching and practising authentic swing dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances.</p>
    <p>Check out our <a href="/courses">course schedule</a> and join in. We have weekly courses as well as <a href="/events">events</a> and weekend workshops.</p>
    <p>We also offer private classes for those who wish to get a quick start on dancing or want to get more personal instruction.</p>
    <a href="/courses" class="button">Browse courses</a>
    <a href="/services/#private-classes" class="button secondary">Private classes</a>

    <h3 class="t30">Courses from beginners to advanced</h3>
    <div class="frame ultrawide article-media">
      <img src="{{ 'tanja-kay-saiffa-beginners.jpeg' | imgurl,size:'medium' }}" />
    </div>
    <br/>
    <p>Lindy Hop Beginners' courses aim to teach you the very basics of swing dancing. You will learn how to move yourself and with your partner to swinging jazz tunes. We will work on basic patterns, rhythms and fundamentals of partner connection.</p>
    <p>We have <a href="/courses-for-beginners/">beginners' courses</a> on Lindy Hop, Solo Jazz & Charleston, and Tap Dancing. No previous experience required!</p>
    <p>For those who are already dancing, we have a variety of classes of different styles and topics. Check out <a href="https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000082224-which-courses-should-i-pick-" target="_blank">this article</a> to find out which courses and levels would be the best for you.</p>
    <a href="/courses-for-beginners/" class="button small">Check out all beginners' courses</a>
  </div>
</section>

{% include index_blocks/block-inspiration.html %}

{% include index_blocks/block-testimonials.html %}

{% include index_blocks/block-events.html %}


<h2 class="text-center">Welcome to BPS!</h2>

<section class="row width-max b30">
  <div class="medium-12 columns slick-padded">
    <div class="slick-carousel" {% include slick-data slidesToShow=3 variableWidth=true %}>
      {% for img in page.slider3 %}
      <div class="item">
          <img src="{{ img.image_url | imgurl,size:'medium' }}" style="object-position: {{ img.position | default: "center" }}; height: 320px; width: auto;" />
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<div class="text-center">
  <p>Follow us on social media:</p>
  <div class="text-center t15">
    <ul class="inline-list social-icons" style="display: inline-block;">
      {% for social_item in site.data.socialmedia %}
      {% if social_item.visible != false %}
      <li><a href="{{ social_item.url }}" target="_blank" class="{{ social_item.class }}" title="{{ social_item.title }}"></a></li>
      {% endif %}
      {% endfor %}
    </ul>
  </div>
</div>

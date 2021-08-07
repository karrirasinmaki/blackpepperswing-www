---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

title: "Black Pepper Swing"
subheadline: "SWING TAP LINDY HOP CHARLESTON"

permalink: /index.html

slider1:
- image_url: helswingi-2018-karri-ulla.jpg
  position: 93%
- image_url: helswingi-2018-andzej-essi.jpg
  position: 70%
- image_url: karri/karri-ball-heel-slide.jpg
- image_url: tanja-karri-polaroid.png
- image_url: bps-class-tanja-karri-ressu-2018-by-alessandroituarte.jpg

slider2:
- image_url: tuesday-night-hop-shimsham.jpg
- image_url: helswingi-2018-maria-kir.jpg
- image_url: helswingi-2018-class-high-five.jpg
---

<section class="hero-showcase row container width-max height-max align-items-center">
  <div class="show-for-medium-up medium-4 columns bg color-main"></div>
  <div class="show-for-small-only small-12 columns bg color-contrast"></div>
  <div class="row">
    <div class="medium-2 columns">&nbsp;</div>
    <div class="medium-4 columns aside">
      <div class="show-for-small-only small-6 columns bg color-main"></div>
      <div class="t70"></div>
      <div class="carousel vertical width-medium frame-container portrait shadow-pop">
        {% for img in page.slider1 %}
        <div>
          <div class="frame portrait cover">
            <img src="{{ img.image_url | imgurl,size:'medium' }}" style="object-position: {{ img.position | default: "center" }}" />
          </div>
        </div>
        {% endfor %}
      </div>
      <div class="b30"></div>
    </div>
    <div class="medium-6 columns end t30">
      <div class="medium-12 columns">
      {% include_relative intro.md %}
      </div>
    </div>
  </div>
</section>

<div class="show-for-medium-up t-90"></div>
<hr class="decor skew-left" />

<section class="row b30">
  <div class="medium-6 columns aside">
    <div class="frame landscape shadow-pop">
      <img src="{{ 'helswingi-2018-group-picture-tommi.jpg' | imgurl,size:'medium' }}" />
    </div>
  </div>
  <div class="medium-6 columns end">
    <div class="show-for-medium-up t90"></div>
    <h2>Swing is <b>back</b></h2>
    <p>Spreading swing dancing in modern society means inspiring people to connect with jazz music, themselves and each other. We offer engaging, precise and fun teaching from the first course on. And we make sure your dance time is not limited to the lessons.</p>
  </div>
</section>

<section class="row">
  <div class="medium-12 columns">
  {% assign dances = site.dances | sort: "order" %}
  {% include grid.html cols=3 collection=dances template="dance-excerpt.html" %}
  </div>
</section>

<div class="t90 b50"></div>

<hr class="decor skew-x underlay" />

<section class="row b30 t-50">
  <div class="show-for-medium-up medium-6 columns aside">
    <!-- TODO: fetch from slider2 -->
    <div class="frame square cover shadow-pop">
      <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
    </div>
    <br />
    <div class="row">
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ 'helswingi-2018-maria-kir.jpg' | imgurl,size:'medium' }}" />
        </div>
      </div>
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ 'helswingi-2018-class-high-five.jpg' | imgurl,size:'medium' }}" />
        </div>
      </div>
    </div>
  </div>
  <div class="medium-6 columns end">
    <h2 class="color-contrast">How to<br/><span class="l15"></span> join the fun?</h2>
    <div class="show-for-small-only">
      <div class="carousel width-medium frame-container square shadow-pop">
        {% for img in page.slider2 %}
        <div>
          <div class="frame square cover">
            <img src="{{ img.image_url | imgurl,size:'medium' }}" style="object-position: {{ img.position | default: "center" }}" />
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    <div class="t90"></div>
    <p>Lindy Hop Beginners' courses aim to teach you the very basics of Lindy hop. You will learn how to move yourself and with your partner to swinging jazz tunes. We will work on basic patterns, rhythms and fundamentals of partner connection.</p>
    <p>We focus on teaching and practising authentic swing dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances.</p>
    <a href="/courses" class="button">Browse courses</a>
    <a href="/about-us" class="button secondary">Read more about our school</a>

    <h3 class="t30">Courses from beginners to advanced</h3>
    <p>Lindy Hop Beginners' courses aim to teach you the very basics of Lindy hop. You will learn how to move yourself and with your partner to swinging jazz tunes. We will work on basic patterns, rhythms and fundamentals of partner connection.</p>
    <p>We focus on teaching and practising authentic swing dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances.</p>
  </div>
</section>

<section class="row b30">
  <div class="medium-12 columns">
    <h2 class="text-center">Upcoming events</h2>

    {% assign events = site.events | sort: "date_end" | reverse %}
    {% include grid.html cols=2 entries=2 collection=events template='post-snippet.html' %}
    <div class="text-center t50">
      <a href="{{ site.baseurl }}/events"><big>{{ site.data.language.show_all_events }}</big></a>
    </div>
  </div>
</section>

{% include index_blocks/block-testimonials.html %}

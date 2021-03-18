---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

title: "Black Pepper Swing"
subheadline: "SWING TAP LINDY HOP CHARLESTON"

permalink: /index.html

slider1:
- image_url: karri/karri-ball-heel-slide.jpg
  caption: "Teaching Black Pepper Swing class. Photo by Alessandro Ituarte (www.alessandroituarte.com)."
- image_url: karri/karri-balboa-helswingi-2018.jpg
  caption: "Helswingi 2018. Photo by Eric Bobrie (www.ebobrie.com)."
- image_url: karri/karri-slow-helswingi-2018.jpg
  caption: "Helswingi 2018. Photo by Eric Bobrie (www.ebobrie.com)."
- image_url: karri/karri-portrait.jpg
  caption: "Portrait. Photo by Jyri Rasinmäki (www.instagram.com/rasinmaki)."
- image_url: tanja-karri-polaroid.png
  caption: "Tanja & Karri, teaching Black Pepper Swing class, autumn 2018. Photo by Adrian Ehrlich (adrianehrlich.com)."
---

<section class="hero-showcase row container max">
  <div class="medium-4 columns bg color-main"></div>
  <div class="row t70 b30">
    <div class="medium-2 columns">&nbsp;</div>
    <div class="medium-4 columns aside">
      <div class="carousel">
        {% for img in page.slider1 %}
        <div class="frame portrait cover">
          <img src="{{ img.image_url | imgurl,size:'medium' }}" />
        </div>
        {% endfor %}
      </div>
    </div>
    <div class="medium-5 columns end t90">
      {% include_relative intro.md %}
    </div>
  </div>
</section>

<hr class="decor skew-left" />

<section class="row align-items-center b30">
  <div class="medium-6 columns aside">
    <div class="frame landscape">
      <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
    </div>
  </div>
  <div class="medium-6 columns end t50">
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
  <div class="medium-6 columns aside">
    <div class="frame square cover">
      <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
    </div>
    <br />
    <div class="row">
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
        </div>
      </div>
      <div class="medium-6 columns">
        <div class="frame portrait cover">
          <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
        </div>
      </div>
    </div>
  </div>
  <div class="medium-6 columns end">
    <h2 class="color-contrast">How to<br/><span class="l15"></span> join the fun?</h2>
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

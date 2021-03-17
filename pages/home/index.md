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
      <div class="carousel portrait">
        {% for img in page.slider1 %}
        <div><img src="{{ img.image_url | imgurl,size:'medium' }}" /></div>
        {% endfor %}
      </div>
    </div>
    <div class="medium-5 columns end t90">
      {% include_relative intro.md %}
    </div>
  </div>
</section>

<hr class="decor skew-left" />

<section class="row b30">
  <div class="medium-6 columns aside">
    <img src="{{ 'tuesday-night-hop-shimsham.jpg' | imgurl,size:'medium' }}" />
  </div>
  <div class="medium-5 columns end t70">
    <h2>Swing is <b>back</b></h2>
    <p>Spreading swing dancing in modern society means inspiring people to connect with jazz music, themselves and each other. We offer engaging, precise and fun teaching from the first course on. And we make sure your dance time is not limited to the lessons.</p>
  </div>
</section>

<section class="row">
  <div class="medium-12 columns" markdown="1">
  {% include_relative main.md %}
  </div>
</div>

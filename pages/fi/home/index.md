---
lang: fi
layout: frontpage

meta_title: Black Pepper Swing
meta_description: Helsinkiläinen swing-tanssikoulu, joka keskittyy intohimoisesti ns. autenttisiin swing-tansseihin. Meiltä löytyy niin viikottaisia kursseja kuin workshopeja, tapahtumia, sekä kaikennäköistä muuta tanssiin liittyvää.

title: "Black Pepper Swing"
subheadline: "SWING TAP LINDY HOP CHARLESTON"

permalink: /

image:
  src: helswingi-2018-group-hug.jpg

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
- title: Kurssi-ilmoittautuminen
  url: /courses
  type: main
- title: Lindy Hop
  url: /lindyhop
  type: secondary

secondary_ctas:
- title: Meistä
  url: /about-us
- title: Yhteystiedot
  url: /contact
- title: Nettikirjasto
  url: https://library.blackpepperswing.com/
- title: Aloittelijoiden kurssit
  url: /courses-for-beginners
- title: Yksityistunnit
  url: https://holvi.com/shop/blackpepperswing/section/private-classes/
- title: Kerta- ja 10-kortit
  url: /punch-cards

featured_ctas:
- title: Uusi tanssija - aloita täältä
  url: /start-dancing
  img: helswingi-2018-andzej-essi.jpg
- title: Kurssit ja ilmoittautuminen
  url: /courses
  img: https://firebasestorage.googleapis.com/v0/b/custportal-3000.appspot.com/o/media%2Fbps-autumn-2022.jpg?alt=media&token=19fae595-876a-41d2-8386-8ce1fc1752b7
- title: Tapahtumat ja workshopit
  url: /events
  img: helswingi-cover-2022-web.jpg
---

{% capture intro %}
**Hei vaan!**

Olemme inspiroiva ja intohimoinen swing-tanssikoulu Helsingissä. Löydät meiltä [viikkokurssit](/courses), [workshopit](/events), ja erinäiset svengaavat [tapahtumat](/events). Voit myös [vuokrata tanssisalin](/studio-rental) käyttöösi, tai kenties ottaa muutaman [yksityistunnin](/services/#private-classes) kanssamme.

Nähdään tanssilattialla!
{% endcapture %}

{% capture intro_after %}
<div class="text-center">
<h2 style="margin: 0; font-weight: bold;"><a href="#season-info" style="color: inherit;">↓ u u s i&nbsp; &nbsp;k a u s i ↓</a></h2>
<p><small>Tervetuloa mukaan! Kurkkaa infoa tulevasta kaudesta alempaa.</small></p>
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
    <h2>Swing on uusi <b>musta</b></h2>
    <p>Swing-tanssit, nuo big bandien kulta-ajalla syntyneet tanssityylit, tempaavat helposti mukaansa. Olitpa sitten vasta-alkaja tai kokenut tamppaaja, löydät meiltä kursseja joka lähtöön.</p>
    <p>Meille tanssissa on tärkeintä luovuus, musiikki ja jaetut hetket toisten kanssa. Vaalimme näitä arvoja niin tunneilla kuin sosiaalitansseissa. Tule kokeilemaan - saatat jopa ihastua!</p>
    <p><a href="{{ site.baseurl }}/courses" class="">Löydät kaikki tanssikurssimme täältä</a></p>
  </div>
</section>

<section class="row width-max">
  <div class="medium-12 columns slick-padded">
  {% assign dances = site.dances | sort: "order" %}
  {% include carousel.html slidesToShow=3 centerMode="true" initialSlide=1 adaptiveHeight="true" arrows="true" dots="true" collection=dances template="dance-excerpt.html" %}
  </div>
</section>

{% include index_blocks/block-inspiration.html %}

{% include index_blocks/block-testimonials.html %}

{% include index_blocks/block-events.html %}


<h2 class="text-center">Tervetuloa!</h2>

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
  <p>Seuraa meitä somessa:</p>
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

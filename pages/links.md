---
title: Links
subheadline: Black Pepper Swing
meta_description: Useful links and shortcuts.

image:
  src: harbour-sorkka.jpg
  caption: Heinonen Eino (1950) | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

header:
  short: true

sitemap:
  priority: 0.2
permalink: "/links/"
---

<div class="text-center t30" style="max-width: 420px; margin: 0 auto;">
  <ul class="social-icons side-nav">
    <li><a href="{% link _events/2022-helswingi-beginners.md %}">Helswingi Beginners | Sept 10-11</a></li>
    <li class="divider b60"></li>
    <li><a href="/courses">Courses and workshops</a></li>
    <li><a href="/courses-for-beginners/">Beginners' Classes</a></li>
    <li><a href="https://www.helswingi.fi/">Helswingi festival</a></li>
    <li class="divider b60"></li>
    <li><a href="https://library.blackpepperswing.com/">Library</a></li>
    <li><a href="https://www.youtube.com/playlist?list=PLXuPJeS8W-KoF6CIHZan0xlxfD0hO4iYQ">Colorized clips</a></li>
    <li class="divider b60"></li>
    <li><a href="https://holvi.com/shop/blackpepperswing/">Shop</a></li>
    <li><a href="https://holvi.com/shop/blackpepperswing/section/private-classes/">Private classes</a></li>
    <li><a href="https://holvi.com/shop/blackpepperswing/section/gift-cards/">Gift cards</a></li>
    <li class="divider b60"></li>
    {% for social_item in site.data.socialmedia %}
    {% if social_item.visible != false %}
    <li><a href="{{ social_item.url }}" target="_blank" class="{{ social_item.class }}" title="{{ social_item.name }}"> {{ social_item.name }}</a></li>
    {% endif %}
    {% endfor %}
  </ul>
</div>


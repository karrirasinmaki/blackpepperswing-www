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
    <li><a href="https://portal.blackpepperswing.com/courses/2p9gjt5onldd44mkbhoeis9qe8/lindy-hop-beginners'-weekend-course">Lindy Hop Beginners' Weekend (Nov 26-27)</a></li>
    <li class="divider b60"></li>
    <li><a href="/courses">Courses and workshops</a></li>
    <li><a href="/courses-for-beginners/">Beginners' Classes</a></li>
    <li class="divider b60"></li>
    <li><a href="https://library.blackpepperswing.com/">Library</a></li>
    <li><a href="https://library.blackpepperswing.com/browse/type/music/">Music</a></li>
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
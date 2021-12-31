---
meta_title: Contact
title: Contact Us
image:
  src: telephone-center.jpg
  caption: Artist Unknown | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

sitemap:
  priority: 0.96
permalink: "/contact/"
---

Do you have ideas for courses? Feedback? Or you look for a performance at your event? We invite you to join our school and dance scene.

{{ site.title }}  
{{ site.email }}  
{{ site.tel }}  

Address: {{ site.address }}  


### Find us on social media

<div class="t15">
  <ul class="inline-list social-icons" style="display: inline-block;">
    {% for social_item in site.data.socialmedia %}
    {% if social_item.visible != false %}
    <li><a href="{{ social_item.url }}" target="_blank" class="{{ social_item.class }}" title="{{ social_item.title }}"></a></li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

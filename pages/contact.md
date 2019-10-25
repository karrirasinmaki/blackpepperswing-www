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

{% assign facebook = site.data.socialmedia | where: "name","Facebook" | first %}
[You can find us on Facebook]({{ facebook.url }})

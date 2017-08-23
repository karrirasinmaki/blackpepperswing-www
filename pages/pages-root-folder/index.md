---
layout: frontpage

meta_title: Black Pepper Swing
title: Hopping around swamps and lakes since 2017
subheadline: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.
header:
  shadow_opacity: 0.2
  large: true
image:
  src: lindy-in-forest.jpg
  caption: Jouko Järnefelt

permalink: /index.html
---

> “I've never seen a Lindy Hopper who wasn't smiling. It's a happy dance. It makes you feel good.”  
  \- Frankie Manning

Authentic swing dances include a big variety of social and performed dances from the 1920’s to 1940’s. Spreading swing dancing in modern society means inspiring people to connect with jazz music, themselves and each other. We offer engaging, precise and fun teaching from the first course on. And we make sure your dance time is not limited to the lessons.

Lindy hop, Shag and Balboa for dancers of different levels and with different aims. Get started or get better - check which course would suit you.

<div class="text-center">
  <a href="{{ site.baseurl }}/courses" class="button">Check the courses</a>
</div>

<!--
## Our teachers

{% include grid.html cols=4 collection=site.teachers template='teacher-snippet.html' %}
-->

---

# What do we dance

We focus on teaching and practising authentic jazz dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances. They also formed the roots for many well known modern street dances. Thanks to the large swing dance revival of the 1990’s they are now more popular than ever before and inspire people all over the planet to dance with each other. 

{% assign dances = site.dances | sort: "order" %}
{% include grid.html cols=3 collection=dances template="title-exceprt-snippet.html" %}

<!--

## Latest articles

{% include grid.html cols=2 entries=2 collection=site.posts template='post-snippet.html' %}
<div class="text-center">
  <a href="blog"><big>{{ site.data.language.show_all_articles }}</big></a>
</div>
-->

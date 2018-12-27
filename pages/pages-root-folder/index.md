---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

# title: Hopping around swamps and lakes since 2017
# title: New courses starting in November
# title: ""
title: "Black Pepper Swing"
subheadline: "New courses starting in January. Registration is open!"
# subheadline: "Join us and swing up your life!"
# subheadline: "&nbsp;"
# subheadline: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.
header:
  shadow_opacity: 0.2
  large: true

# image:
#  src: lindy-in-forest.jpg
#  caption: Jouko Järnefelt

iframe:
  src: https://www.youtube.com/embed/hrAMDTchIxY?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1

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
{% comment %}

## Our teachers

{% include grid.html cols=4 collection=site.teachers template='teacher-snippet.html' %}

{% endcomment %}
-->

---

# What do we dance

We focus on teaching and practising authentic jazz dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances. They also formed the roots for many well known modern street dances. Thanks to the large swing dance revival of the 1990’s they are now more popular than ever before and inspire people all over the planet to dance with each other. 

At the moment we offer teaching of Lindy hop, Balboa and Shag in Tampere, Helsinki and Jyväskylä.

{% assign dances = site.dances | sort: "order" %}
{% include grid.html cols=3 collection=dances template="title-exceprt-snippet.html" %}

<!--
{% comment %}

## Latest articles

{% include grid.html cols=2 entries=2 collection=site.posts template='post-snippet.html' %}
<div class="text-center">
  <a href="blog"><big>{{ site.data.language.show_all_articles }}</big></a>
</div>

{% endcomment %}
-->

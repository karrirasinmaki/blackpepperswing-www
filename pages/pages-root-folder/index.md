---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

# title: Hopping around swamps and lakes since 2017
# title: New courses starting in November
# title: ""
title: "Black Pepper Swing"
subheadline: "New courses starting in September"
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

<!--
{% comment %}

## Our teachers

{% include grid.html cols=4 collection=site.teachers template='teacher-snippet.html' %}

{% endcomment %}
-->

> “I've never seen a Lindy Hopper who wasn't smiling. It's a happy dance. It makes you feel good.”  
  \- Frankie Manning

We focus on teaching and practising authentic swing dances. These dance forms from America’s 1920’s to 1940’s are all marked by their development as social dances. They also formed the roots for many well known modern street dances. Thanks to the large swing dance revival of the 1990’s they are now more popular than ever before and inspire people all over the planet to dance with each other. 

Spreading swing dancing in modern society means inspiring people to connect with jazz music, themselves and each other. We offer engaging, precise and fun teaching from the first course on. And we make sure your dance time is not limited to the lessons.

Lindy hop, Shag and Balboa, Solo Jazz and Tap Dancing - for dancers of different levels and with different aims. Get started or get better. Check which course would suit you.

<div class="text-center">
  <a href="{{ site.baseurl }}/courses" class="button">Check the courses</a>
  <p>
    New courses starting in September.<br>
    Registration opens on 5th of August at 18:00.
  </p>
</div>


<div class="t50"><hr/></div>

{% assign dances = site.dances | sort: "order" %}
{% include grid.html cols=3 collection=dances template="dance-excerpt.html" %}


<div class="t50"><hr/></div>
# Upcoming events

{% assign events = site.events | sort: "date_end" | reverse %}
{% include grid.html cols=2 entries=2 collection=events template='post-snippet.html' %}
<div class="text-center t50">
  <a href="{{ site.baseurl }}/events"><big>{{ site.data.language.show_all_events }}</big></a>
</div>


<div class="t50"><hr/></div>

<div class="row">
  <div class="columns large-5 medium-4 small-8">
    <div class="article-media pull-left">
      <img src="{{ site.urlimg }}medium/bps-classroom-big.jpg" alt="BPS Classes" title="BPS Classes" />
    </div>
  </div>
  <div class="columns large-7 medium-8 small-12">
    <section>
      {% assign page_lindy = site.pages | where: "name", "lindyhop.md" | first %}
      <h2>{{ page_lindy.title }}</h2>
      {{ page_lindy.description }}
      <p>
        <a href="{{ site.baseurl }}{{ page_lindy.url }}">{{ site.data.language.read_more }}</a>
      </p>
    </section>
    <section>
      <h2>Beginners' courses</h2>
      <p><strong>We start new beginners' courses 4 times in a year!</strong></p>
      <p>
        Lindy Hop Beginners' courses aim to teach you the very basics of Lindy hop. You will learn how to move yourself and with your partner to swinging jazz tunes. We will work on basic patterns, rhythms and fundamentals of partner connection.
      </p>
      <p>
        No previous dance experience required. No partner necessary.
      </p>
      <div class="">
        <a href="https://portal.blackpepperswing.com/courses?tab=overview&q=beginners" class="button small" target="_blank">Check out all beginners' courses</a>
      </div>
    </section>
  </div>
</div>

<!--
{% comment %}

## Latest articles

{% include grid.html cols=2 entries=2 collection=site.posts template='post-snippet.html' %}
<div class="text-center">
  <a href="blog"><big>{{ site.data.language.show_all_articles }}</big></a>
</div>

{% endcomment %}
-->

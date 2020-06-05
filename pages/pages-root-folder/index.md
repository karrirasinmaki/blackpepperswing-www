---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

# title: Hopping around swamps and lakes since 2017
# title: New courses starting in November
# title: ""
title: "Black Pepper Swing"
# subheadline: "New season starting on 16th of March!"
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
  src: https://www.youtube.com/embed/nt2lpQdxVkY?rel=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;showinfo=0&amp;version=3&amp;loop=1&amp;playlist=nt2lpQdxVkY&amp;autoplay=1&amp;enablejsapi=1

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

<!--

<div class="text-center">
  <a href="{{ site.baseurl }}/courses" class="button">Check the courses</a>
  <p>
  We offer Lindy hop, Tap dancing, Solo Jazz and Slow dancing.<br/>
  Registration is open!
  </p>
</div>

-->


<div class="t50"><hr/></div>

{% capture covidwarn %}
<p><b>COVID-19</b> | May 27, 2020</p> <h3>Tiny summer groups &amp; online material</h3>
<i>We are restarting in a lower gear from the 1st of June!</i>
<p>We are starting Tiny Lindy Training Groups,  and donation-based Outdoor Solo training with changing topics as well as reopening our Solo Jazz Group (Beginner-Improver).</p>
<p>All classes have a maximum of 8-10 participants to make it possible to keep distance to your group mates. We also recommend using a light face mask.</p>
<p>Additionally, everyone with a BPS account has an instant access to our new online library, where you can browse content from previous classes. Address for the library is:<br/><a href="https://library.blackpepperswing.com/">https://library.blackpepperswing.com</a></p>
<p>We are still available to teach private classes in June. In July you can take privates from Karri.</p>
<p>Read more about the classes and groups here:<br/>
<a href="https://portal.blackpepperswing.com/courses">https://portal.blackpepperswing.com/courses</a>
</p>

<dl class="accordion" data-accordion>
  <dd class="accordion-navigation">
    <a href="#howto-help">How can you help?</a>
    <div id="howto-help" class="content">
<p>This crisis is probably taking a toll on many of you. If you have a minute or some extra money to spare here are some ideas:</p>
<ul>
<li>First and foremost: Keep dancing, stay motivated, listen to jazz music <3</li>
<li>Stay patient and return to classes when things normalize</li>
<li><a href="https://www.youtube.com/c/blackpepperswing?sub_confirmation=1" target="_blank" rel="noopener noreferrer">Subscribe to our Youtube-channel</a></li>
<li>Like and follow us on <a href="https://www.instagram.com/blackpepperswing/" target="_blank" rel="noopener noreferrer">Instagram</a> and <a href="https://www.facebook.com/blackpepperswing/" target="_blank" rel="noopener noreferrer">Facebook</a>
</li>
<li>
<a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fblackpepperswing%2Freviews%2F" target="_blank" rel="noopener noreferrer">Recommend us on Facebook</a> or <a href="https://g.page/blackpepperswing/review?rc" target="_blank" rel="noopener noreferrer">write a review on Google</a>
</li>
<li><a href="https://blackpepperswing.com/services/#private-classes" target="_blank" rel="noopener noreferrer">Take a private class with us</a></li>
</ul>
<p>Also, if you need help and see a way how we could support you, please email us.</p>
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#danceathome-music">Tanja’s playlists for your at-home-dancing</a>
    <div id="danceathome-music" class="content"><ul>
<li><a href="https://open.spotify.com/playlist/46xyHq9USHUU8oyEDscMVA?si=RPNdzrf1S5OzsuLcM1k8WQ" target="_blank">Solo Jazz</a></li>
<li><a href="https://open.spotify.com/playlist/02b3VBQAntX9KmBNuSqEIE?si=1GXp5BkKTrmA1YWzi5Ud_A" target="_blank">Lindy classes - mid fast</a></li>
<li><a href="https://open.spotify.com/playlist/3GXUexIVeXvxCuWzPcjqy1?si=AafwfOJ4SBenXCl-s3vXhw" target="_blank">Lindy classes - mid slow</a></li>
</ul>
    </div>
  </dd>
  <!-- ... -->
</dl>
{% endcapture %}
{% include alert text=covidwarn %}


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

{% include index_blocks/block-beginners.html %}


<div class="t50"><hr/></div>

{% include index_blocks/block-testimonials.html %}

<!--
{% comment %}

## Latest articles

{% include grid.html cols=2 entries=2 collection=site.posts template='post-snippet.html' %}
<div class="text-center">
  <a href="blog"><big>{{ site.data.language.show_all_articles }}</big></a>
</div>

{% endcomment %}
-->

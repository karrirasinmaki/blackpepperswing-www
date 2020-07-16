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
<h3>Ready for autumn term!</h3>
<p>Our courses are restarting from the 24th of August! We are happy to bounce up our new 100m2 home studio at Bulevardi 31 with classes of Lindy hop, Solo Jazz and Tap dancing.</p>
<p>You can check all classes <a href="/courses">here</a>. Registration opening July 17th.</p>
<p>Due to the current COVID-situation, we are making special arrangements to minimize <a href="https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000077421-our-covid-19-protocol" target="_blank">risks</a>. We take care of cleanliness and hygiene at the studio, teach only smaller groups (&lt; 16 participants) and there is no obligatory couple rotation, but you may choose to rotate with 2-3 couples.</p>
<p>We are looking forward to a season full of possibilities together with you!</p>

<dl class="accordion" data-accordion>
  <dd class="accordion-navigation">
    <a href="#danceathome-music">Tanja’s playlists for your at-home-dancing</a>
    <div id="danceathome-music" class="content"><ul>
<li><a href="https://open.spotify.com/playlist/46xyHq9USHUU8oyEDscMVA?si=RPNdzrf1S5OzsuLcM1k8WQ" target="_blank">Solo Jazz</a></li>
<li><a href="https://open.spotify.com/playlist/02b3VBQAntX9KmBNuSqEIE?si=1GXp5BkKTrmA1YWzi5Ud_A" target="_blank">Lindy classes - mid fast</a></li>
<li><a href="https://open.spotify.com/playlist/3GXUexIVeXvxCuWzPcjqy1?si=AafwfOJ4SBenXCl-s3vXhw" target="_blank">Lindy classes - mid slow</a></li>
</ul>
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#private-class">Kick-start the autumn with a private classes</a>
    <div id="private-class" class="content">
      <p>Freshen up your skills before new season with a private class or two with us. Just drop us a message and arrange a meeting!</p>
      <p>info@blackpepperswing.com<br/>+358 84 154 1724</p>
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#social-media">Our social media</a>
    <div id="social-media" class="content">
      <ul>
        <li><a href="https://www.youtube.com/channel/UCqhUGGN-O_FC5Luf3wOmO1g" target="_blank">Youtube</a></li>
        <li><a href="https://www.instagram.com/blackpepperswing/" target="_blank">Instagram</a></li>
        <li> <a href="https://www.facebook.com/blackpepperswing/" target="_blank">Facebook</a></li>
      </ul>
    </div>
  </dd>
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

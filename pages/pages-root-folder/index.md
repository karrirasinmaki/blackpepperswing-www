---
layout: frontpage

meta_title: Black Pepper Swing
meta_description: We are a swing dance school based in Helsinki, Tampere and Jyväskylä, founded and run through passion for authentic swing dances. We teach, organize, social dance, perform and keep the dance floor busy.

# title: Hopping around swamps and lakes since 2017
# title: New courses starting in November
# title: ""
title: "Black Pepper Swing"
subheadline: "New season starting on 16th of March!"
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
<p><b>COVID-19</b> | March 29, 2020</p> <h3>Classes on hold</h3>
<i>We are hopefully back in summer.</i>
<p>More restrictions have been imposed and we are unfortunately not very hopeful to restart our teaching activity before the end of May. We are really terribly sorry for this unhoped-for dance break.</p>
<p>We will offer summer classes - classes on weekdays and workshops on weekends. This means we will teach in June and August, maybe also in July. All this will depend on the further development of the situation and we will, of course, keep you updated.</p>
<p>More info about cancelled courses and reimbursements will be sent to all participants.</p>
<p>We miss teaching and seeing you! Stay healthy and happy!</p>

<dl class="accordion" data-accordion>
  <dd class="accordion-navigation">
    <a href="#howto-help">How can you help?</a>
    <div id="howto-help" class="content">
<p>This crisis is probably taking a toll on many of you. If you have a minute or some extra money to spare here are some ideas:</p>
<ul>
<li>First and foremost: Keep dancing, stay motivated, listen to jazz music <3</li>
<li>Stay patient and return to classes when things normalize</li>
<li>Follow our <a href="https://www.youtube.com/channel/UCqhUGGN-O_FC5Luf3wOmO1g" target="_blank">Youtube-channel</a></li>
<li>Follow us on <a href="https://www.instagram.com/blackpepperswing/" target="_blank">Instagram</a> and <a href="https://www.facebook.com/blackpepperswing/" target="_blank">Facebook</a></li>
<li>Write us a nice evaluation of our classes or events on <a href="https://www.facebook.com/blackpepperswing/" target="_blank">Facebook</a></li>
<li>Buy a gorgeous <a href="https://holvi.com/shop/LkwQb5/section/helsinki-swing-community/" target="_blank">Helsinki Swing scene support</a> T-shirt or package</li>
<li>Take a private class with us</li>
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

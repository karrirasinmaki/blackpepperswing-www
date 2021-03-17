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

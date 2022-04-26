---
meta_title: Events, workshops and festivals
meta_description: Parties and events to swing out, hang out and meet new friends.

title: Parties and workshops
image:
  src: parties.jpg
  caption: Ahola Harri | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

sitemap:
  priority: 0.98
permalink: "/events/"
---

## Special events, workshops and festivals

{% assign events = site.events | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'false' | sort: 'title' | sort: 'date' | sort: 'date_start' | reverse %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}


### Latest courses and workshops

{% include portal-events.html %}


### Weekly events

{% assign events = site.events | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'weekly' | sort: 'title' | sort: 'order' %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}
{% if events.size == 0 %}
  There are currently no weekly swing dance events.

  But we have weekly swing dance classes from Monday to Friday.  
  Check out the course schedule here:  
  [{{site.url}}/courses](/courses)
{% endif %}


<br>
<div class="text-center">
  <a href="{{ site.url }}/events/all/">Show all previous events</a>
</div>

<div class="t60 b60">&nbsp;</div>

## Events on Facebook
<br>

<div class="fb-page" data-href="https://www.facebook.com/blackpepperswing/" data-tabs="events" data-width="320" data-height="480" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/blackpepperswing/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blackpepperswing/">Black Pepper Swing Events on Facebook</a></blockquote></div>

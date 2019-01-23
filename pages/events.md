---
meta_title: Events, workshops and festivals
meta_description: Parties and events to swing out, hang out and meet new friends.

title: Parties and workshops
image:
  src: parties.jpg
  caption: Ahola Harri | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

permalink: "/events/"
---

## Special events, workshops and festivals

{% assign parties = site.parties | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'false' | sort: 'title' | sort: 'order' %}
{% include grid.html cols=1 collection=parties template='post-snippet.html' %}


## Weekly events

{% assign parties = site.parties | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'weekly' | sort: 'title' | sort: 'order' %}
{% include grid.html cols=1 collection=parties template='post-snippet.html' %}

<div class="t60 b60">&nbsp;</div>

## Events on Facebook
<br>

<div class="fb-page" data-href="https://www.facebook.com/blackpepperswing/" data-tabs="events" data-width="320" data-height="480" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/blackpepperswing/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blackpepperswing/">Black Pepper Swing Events on Facebook</a></blockquote></div>

---
meta_title: Event archive
meta_description: Parties and events to swing out, hang out and meet new friends. Event archive.

image:
  src: parties.jpg
  caption: Ahola Harri | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

permalink: "/events/all"
---

## All events - upcoming and past
  <a href="{{ site.url }}/events/">Show only upcoming events</a>

{% assign events = site.events | sort: 'title' | sort: 'date' | sort: 'date_start' | reverse %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}

## Events on Facebook
<br>

<div class="fb-page" data-href="https://www.facebook.com/blackpepperswing/" data-tabs="events" data-width="320" data-height="480" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/blackpepperswing/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blackpepperswing/">Black Pepper Swing Events on Facebook</a></blockquote></div>

---
meta_title: Parties and workshops
meta_description: More information coming soon...

title: Parties and workshops
image:
  src: parties.jpg
  caption: Ahola Harri | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

permalink: "/events/"
---

## Parties

{% assign parties = site.parties sort: 'date' | sort: 'date_start' | sort: 'title' %}
{% include grid.html cols=1 collection=parties template='post-snippet.html' %}


## Workshops

{% assign courses = site.courses | where: 'city', 'Workshop' | where: 'event_type', 'workshop' | sort: 'date_start' | sort: 'type' | sort: 'name' %}
{% include grid.html cols=1 collection=courses template='post-snippet.html' %}

<div class="t60 b60">&nbsp;</div>

## Events on Facebook
<br>

<div class="fb-page" data-href="https://www.facebook.com/blackpepperswing/" data-tabs="events" data-width="320" data-height="480" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/blackpepperswing/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blackpepperswing/">Black Pepper Swing Events on Facebook</a></blockquote></div>

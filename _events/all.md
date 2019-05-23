---
layout: page
title: Event archive
meta_title: Event archive
meta_description: Parties and events to swing out, hang out and meet new friends. Event archive.

image:
  src: parties.jpg
  caption: Ahola Harri | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/
---

## All events - upcoming and past
  <a href="{{ site.url }}/events/">Show only upcoming events</a>

{% assign events = site.events | sort: 'title' | sort: 'date' | sort: 'date_start' | reverse %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}

<br>
<a href="{{ site.url }}/events/">Show only upcoming events</a>

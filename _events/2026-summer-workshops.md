---
layout: page

archived: false
repeats: false

title: BPS Summer Workshops 2026
subtitle: Helsinki | June
teaser: Summer workshops in the beginning of June.
date_start: 2026-06-01
date_end: 2025-06-14
address: Helsinki, Finland
header:
  hide_text: false
image:
  src: "events/summer-2026/summer-2026-cover.jpg"

---

## Summer 2026

### Workshops and masterclasses in June

{% assign events = site.events | where_exp: 'item', 'item.url contains "2026-summer"' | sort: 'title' | sort: 'date' | sort: 'date_start' %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}

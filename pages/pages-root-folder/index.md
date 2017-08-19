---
layout: frontpage

title: Black Pepper Swing
subheadline: hopping around Helsinki and Tampere since 2017
image:
  src: men-stones.jpg
  caption: Kannisto Väinö | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

permalink: /index.html
---


Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum congue libero a gravida. Morbi venenatis metus ut est dictum, sed sagittis dolor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse facilisis elit ornare est auctor maximus.
Vivamus pharetra laoreet dui, commodo aliquet ante finibus pretium. Vivamus lobortis quis purus eget porta. Duis suscipit libero risus, et dignissim arcu interdum non. Suspendisse feugiat posuere ex sit amet egestas. Pellentesque mattis arcu eu sapien porttitor laoreet. Phasellus ac ex et lorem placerat posuere ut iaculis tellus. Praesent ac luctus mi. Donec ut gravida ex. Pellentesque id metus vitae erat viverra lobortis mollis quis ex. 

## Our teachers

{% include grid.html cols=4 collection=site.teachers template='teacher-snippet.html' %}

---

## What we dance
<div class="row">
  <div class="large-4 columns">
    <h3>Lindy Hop</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum congue libero a gravida. Morbi venenatis metus ut est dictum, sed sagittis dolor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse facilisis elit ornare est auctor maximus.</p>
  </div>
  <div class="large-4 columns">
    <h3>Shag</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum congue libero a gravida. Morbi venenatis metus ut est dictum, sed sagittis dolor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse facilisis elit ornare est auctor maximus.</p>
  </div>
  <div class="large-4 columns">
    <h3>Balboa</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum congue libero a gravida. Morbi venenatis metus ut est dictum, sed sagittis dolor tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse facilisis elit ornare est auctor maximus.</p>
  </div>
</div>

---

## Latest articles

{% include grid.html cols=2 entries=2 collection=site.posts template='post-snippet.html' %}
<div class="text-center">
  <a href="blog"><big>{{ site.data.language.show_all_articles }}</big></a>
</div>

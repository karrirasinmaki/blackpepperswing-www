---
published: false
layout: page-fullwidth

meta_title: Pricing and compare | Dance Passes
meta_description: Closer look on all the features and benefits of the Dance Pass. Single payment, all the classes

title: "&nbsp;"

image:
  src: helswingi-2022-adam-smile-bps.jpg
  caption: Dance passes now available
  position: top center

header:
  short: true

sitemap:
  priority: 0.8
permalink: /dance-passes/compare
---

[1]: #dance-passes

<section class="medium-12 medium-centered columns width-reader" markdown="1">
</section>

<section class="row">
  {% assign passes = site.data.pricing.dance_passes | sort:"price" | reverse %}
  {% for pass in passes %}
  <div class="medium-4 columns">
    <ul class="pricing-list">
      <h3>{{ pass.title }}</h3>
      {% for item in pass.perks %}
        <li>
        <span class="title">{{ item }}</span>
        <p class="description">{{ pass.perks_values[forloop.index0] }}</p>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>

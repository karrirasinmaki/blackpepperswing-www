---
meta_description: Combined new archive from BPS newsletter and Facebook feed.

title: News

image:
  src: newspaper-seller.jpg
  caption: Pälsi Sakari | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/

header:
  short: true

sitemap:
  priority: 0.95
permalink: /news/
---

## Latest

{% for tag in site.tags %}
{% if tag[0] == "featured" %}
  {% for entry in site.posts %}
  {% include post-snippet.html %}
  {% endfor %}
{% endif %}
{% endfor %}

<br/>

<div class="text-center">
  More latest news on <a href="https://portal.blackpepperswing.com/home" target="_blank">Portal</a>.
</div>


## Newsletters

<style type="text/css">
<!--
.display_archive {font-size: 12px;}
.display_archive a {font-size: 13px;}
.campaign {line-height: 125%; margin: 12px 2px;}
//-->
</style>
<script language="javascript" src="//blackpepperswing.us16.list-manage.com/generate-js/?u=afde0a77ccfe7b464547ee2c6&fid=8065&show=10" type="text/javascript"></script>


## Facebook feed

<style type="text/css">
<!--
.fb-page {margin: 12px 2px;}
//-->
</style>
<div class="fb-page" data-href="https://www.facebook.com/blackpepperswing/" data-tabs="timeline,events,messages" data-width="500" data-height="560" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/blackpepperswing/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/blackpepperswing/">Black Pepper Swing</a></blockquote></div>

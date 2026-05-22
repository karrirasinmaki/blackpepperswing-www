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

**May**

**Sun May 31st** / End of season party  
Shows and summer celebration  
16:00 - 22:30


**June**

**June 2-12** / Summer workshops and masterclasses  
[Check out the full list here...](/events/2026-summer-workshops)


**July**

**July 3-5** / Midnight Sun Swing Festival 2026  
A summer swing dance festival in Helsinki  


---


{% assign events = site.events | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'monthly' | sort: 'title' | sort: 'date' | sort: 'date_start' %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}

{% assign events = site.events | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'false' | sort: 'title' | sort: 'date' | sort: 'date_start' %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}


### Upcoming and ongoing courses

Check out our courses here:  
[https://blackpepperswing.com/courses](https://blackpepperswing.com/courses)

## Events in Helsinki

<p>All swing and blues dance events in Helsinki.</p>
<p>A public calendar shared with dance schools and event organisers.</p>
<p><a href="/swinginhelsinki">www.swinginhelsinki.fi</a></p>

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FHelsinki&mode=AGENDA&src=bDliYTdnYjVsZDA5cDJybG4zNWh0MzM5aGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986cb" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>


{% comment %}
### Weekly events

{% assign events = site.events | where_exp: 'item', 'item.archived != true' | where: 'repeats', 'weekly' | sort: 'title' | sort: 'order' %}
{% include grid.html cols=1 collection=events template='post-snippet.html' %}
{% if events.size == 0 %}
  There are currently no weekly swing dance events.

  But we have weekly swing dance classes from Monday to Friday.  
  Check out the course schedule here:  
  [{{site.url}}/courses](/courses)
{% endif %}


### Upcoming and ongoing courses

<section class="row">
  <div class="medium-12 columns">
    <div class="fade-bottom" style="max-height: 380px; overflow: hidden;">
      {% include portal-events.html limit=2 randomize=true %}
    </div>
    <p style="z-index:10; padding: 10px;" class="show-more text-center">
      <a href="/courses">Show more...</a>
    </p>
  </div>
</section>


<br>
<div class="text-center">
  <a href="{{ site.url }}/events/all/">Show all previous events</a>
</div>

<div class="t60 b60">&nbsp;</div>
{% endcomment %}


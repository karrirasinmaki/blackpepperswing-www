---
layout: page-wide

title: Services & Pricing
subheadline: Courses, private classes and teaching services
description: Courses, private classes and teaching services.
image:
  src: erikoishintaan.jpg
  caption: Artist Unknown | Helsinkikuvia.fi
  caption_url: https://www.helsinkikuvia.fi/
header:
  shadow_opacity: 0.7

sitemap:
  priority: 0.95
permalink: /services/
---

<div class="text-center">
Menu
<nav>
 <a href="#private-classes">Private classes</a>
 | <a href="#courses-and-weekly-classes">Courses and weekly classes</a>
 | <a href="#teaching-services">Teaching services</a>
 | <a href="#corporate-events">Corporate events</a>
 | <a href="#studio-rental">Studio rental</a>
</nav>
</div>

<section class="row">
<div class="columns medium-10">
<h2>Pricing table</h2>
{% include pricing-list.html items=site.data.pricing.pricing %}

<p>More detailed pricing with examples are found below.</p>
</div>
</section>

<div class="row cols-2">
<div class="columns large-6" markdown="1">

## Private classes
*For intensive training and more personal instruction.*

No time for weekly classes or you feel you need more personal instruction? You can take private classes with one or two instructors at a time. Private classes can have many purposes: you might want to catch up on class material, finetune your dancing and correct habits, learn special skills or movements of your choice etc. In a private class you get plenty of feedback and homework.

Private classes can be demanding, which is why we can do them for 30min, 45min, or 60min. You can either choose to do the classes with only one or two teachers.

All private classes include the studio rental!

**For 1-4 people** with one/two teacher(s)  
75€/115€ for a single session (1 hour) [buy here](https://holvi.com/shop/blackpepperswing/section/private-classes/)  
260€/420€ for 4 sessions (1 hour / session) [buy here](https://holvi.com/shop/blackpepperswing/section/private-classes/)  

**For 5-8 people** with one/two teacher(s)  
105€/165€ for a single session (1 hour)  
380€/620€ for 4 sessions (1 hour / session)  

**Wedding dance**  
250€-350€ (incl. choreography and 2-3 teaching sessions)  

*Don't hesitate to contact us!* {{ site.email }}

---

*Prices include 24% VAT and studio rental.*

We accept payments with card, MobilePay, cash or employee benefit vouchers. [Read more about payments here](https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000068393-what-payment-methods-are-accepted-).


## Courses and weekly classes
*For a comprehensive learning experience.*

Courses and weekly classes are our default learning environment. By attending weekly classes you keep your progress steady and get a little bit better all the time. You get support from peers and teachers and can influence course content. We encourage all students to get more dance time e.g. by attending social dance events or weekend workshops.

Do you want an extra boost?  
[Consider taking a private class with us.](#private-classes)

{% assign products = site.data.pricing.products %}
{% assign course_len = products.course.length_weeks %}
{% assign course_price = products.course.price_per_class | times: course_len %}
{% assign course_price_second = course_price | times: 0.75 %}
{% assign course_price_student = course_price | times: 0.8 %}
{% assign dropin_price = products.drop_in %}
{% assign ten_class_price = products.10_class_card.regular %}
{% assign class_price = products.course.price_per_class %}
{% assign class_price_second = products.course.price_per_class | times: 0.75 %}

**Weekly classes**, with course payment  
{{ course_price }}€ for {{ course_len }} weeks  
{{ class_price }}€ per class with one course  
{{ class_price | plus: class_price_second | divided_by: 2 }}€ per class with two courses  
{{ class_price | plus: class_price_second | plus: class_price_second | divided_by: 3 }}€ per class with three courses

**Discounts**, only one applied  
-20% for students and unemployed  
-25% for every additional course during the same term  
[Read detailed discount terms here.](https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000053082-terms-of-trade)

**Weekly classes**, with drop-in and dance passes  
{{ dropin_price }}€ for single drop-in class  

10-class punch card {{ ten_class_price }}€ ({{ ten_class_price | divided_by: 10.0 | round: 2 }}€ per class)  
[Read more about punch cards here...](/punch-cards)

[Dance Pass](/dance-passes) starting from {{ products.dance_pass.yearly_month }}€/month  
Includes all the weekly classes and activities  
{{ products.dance_pass.yearly_month | divided_by: 4 | divided_by: 2 }}€ per class with two courses  
{{ products.dance_pass.yearly_month | divided_by: 4 | divided_by: 3 }}€ per class with three courses  
[Read more about dance passes here...](/dance-passes)

**Workshops**  
Workshop prices and discounts are defined per workshop.

**Pricing examples**, weekly courses  
{{ course_price }}€ - 1 course, {{ course_len }} weeks  
{{ course_price | plus: course_price_second }}€ - 2 courses, {{ course_len }} weeks  

{{ course_price_student }}€ - 1 course, {{ course_len }} weeks (student)  
{{ course_price_student | plus: course_price_second }}€ - 2 courses, 2 x {{ course_len }} weeks (student)  

---

*Prices include 10% VAT.*

We accept payments with card, MobilePay, cash or employee benefit vouchers. [Read more about payments here](https://blackpepperswing.freshdesk.com/en/support/solutions/articles/42000068393-what-payment-methods-are-accepted-).

</div>
<div class="columns large-6" markdown="1">

## Teaching services
*For dance schools, associations, and festivals.*

**Helsinki metropolitan area** with one/two teacher(s)  
90€/160€ per hour + travel expenses outside AB-zone + VAT  

**Rest of Finland** with one/two teacher(s)  
90€/160€ per hour + travel, food and accommodation expenses + VAT  

**Rest of the world** with one/two teacher(s)  
Starting at 540€/1000€ for a weekend with 6 hours of teaching.

At festivals or workshop weekends the price includes a social dance demonstration. We add VAT (unless reversed) as well as travel, food and accommodation expenses (unless provided by the organizer) to the final price.

*Ask for an offer!* {{ site.email }}


## Corporate events
*For a team day, recreational day, summer/Christmas party, kick off, customer event...*

A fun and engaging Lindy Hop or authentic swing dance experience. Dancing is one of the best ways to really get to know people - including your colleagues and team mates.

**Teaching session** with two teachers  
Starting at 240€ + travel expenses + VAT

*Ask for more!* {{ site.email }}


## Studio rental
*For a practice session, birthday party, social gatherings, running your own lessons...*

Prices start from:  
{{ products.studio_rental.bps_students }}€/h for students of BPS   
{{ products.studio_rental.non_commercial }}€/h for non-commercial use   
{{ products.studio_rental.commercial }}€/h for commercial use   

[See detailed pricing and more info about studio rental here...](/studio-rental)

*Ask for more!* {{ site.email }}

</div>
</div>

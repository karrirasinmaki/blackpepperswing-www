(function() {
  function renderEvent(event, template) {
    return template.html()
      .replace(/--URL--/g, 'https://portal.blackpepperswing.com/courses/' + event.id)
      .replace(/--IMG--/g, event.meta.image_src)
      .replace(/--SUBHEADER--/g, event.meta.categories.split(',').join(' | '))
      .replace(/--HEADER--/g, event.name)
      .replace(/--EXCERPT--/g, event.meta.description)
      .replace(/--TEACHERS--/g, event.meta.teachers)
      .replace(/--DURATION--/g, event.meta.duration)
      .replace(/--DAY--/g, event.meta.day)
      .replace(/--TIME--/g, event.meta.time)
      .replace(/--PRICE--/g, event.meta.price)
      .replace(/--DATE_START--/g, new Date(event.start_date).toLocaleDateString('FI'))
      .replace(/--DATE_END--/g, new Date(event.last_date).toLocaleDateString('FI'))
      ;
  }
  function renderPortalEvents() {
    var template = $('#template-portal-event-snippet');
    /* Load events */
    $.getJSON('https://us-central1-custportal-3000.cloudfunctions.net/api/data/events', function(events) {
      events = events.sort(function(a,b) {return (a.name < b.name) && 1 || -1});
      events = events.sort(function(a,b) {return (a.start_date > b.start_date) && 1 || -1});
      events = events.filter(function(event) {return event.meta.group.indexOf(BPS_COURSES_FILTER_GROUP||"") !== -1});
      for (var day of ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']) {
        var hasEvents = false;
        var eventsWrapper = $('#portal-events-'+day);
        eventsWrapper.html('');
        /* Loop thru single events and render row item */
        for (var i = 0, l = events.length; i<l; ++i) {
          var event = events[i];
          if ((''+event.meta.day).toLowerCase().indexOf(day) !== -1) {
            eventsWrapper.append(renderEvent(event, template));
            hasEvents = true;
          }
        }
        if (!hasEvents) {
          eventsWrapper.append($('#template-portal-no-events').html());
        }
        new Splide('#portal-events-'+day+'-splide', {
          autoWidth: true, // do not set perPage nor perMove
          // perPage: 3,
          // padding: '2em',
          arrows: true,
          breakpoints: {
            920: {
              perPage: 2,
            },
            540: {
              perPage: 1,
            },
          }
        }).mount();
      }
    });
  }
  /* Wait for jQuery to load */
  var at = 100;
  var a = setInterval( function() {
    if ( typeof window.jQuery === 'undefined' ) {
      at = Math.min(1000, at*2);
      return;
    }
    clearInterval( a );
    renderPortalEvents();
  }, at );
})();


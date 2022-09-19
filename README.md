# 592e9341-c3ba-451c-bb1a-8241f78ea501

event shop

## Todo

- Decide on Techstack
- Create Repository
- Create User Stories

  - Create Features

- Dataformat
- Initialize Techstack
- TDD Feature development
- README how to start Application

## Technologie Research

- Use of Angular (Typescript)
- Tailwind.css with Less?
- Use EsLint

## UserStories

0. Initial Setup

   - feature_u0/00_init-angular
   - less / tailwind.css / gui components
   - EsLint

1. A User can view public/private events

   - feature_us1/00_event-view: Single Event View, boilerplate
   - feature_us1/01_event_list: List of single event Views, read data, create dataobjects, pass into event view component
   - feature_us1/02_sort-event-list: Sort List of single event views ASC/DESC options
   - feature_us1/03_sticky-date: Stick date to top in event list while scrolling: Group Event list first
   - feature_us1/04_link-google-maps: Klicking on location opens a new browser tab with google maps location

   - feature_us1/05_preload-event-pictures
   - feature_us1/06_autoload-pagination

2. A User can Search / Filter events
   -feature_us2/00_event-search: Only events will be listed with search term in titel

   -feature_us2/01_filter-time-range: filter events of given date range
   -feature_us2/02_filter-city: filter events by town (All in London) anyway

3. A User can add events to shopping cart

   - feature_us3/00_shoppping-cart-view: When clicking on the shopping cart icon all shopped events will be listed, grey /. not clickable if no events listed yet
   - feature_us3/01_add-item: When clicking on add item in single event view item will be 1. added to shopping cart and 2. delted from list

4. Addional code developments
   - Picture formation: Zoom in flyer if not protrait?
   - Show date if no start and end date, use ngif?

### Addiotional Ideas

    - pagination => autoscroll?
    - nachladen von Bildern alle 100?

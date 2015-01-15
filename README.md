### GULFSTREAM PARK app

**WARNING: I accidentally included the dist folder (the built app) so this branch includes the app twice (oops), will figure out how to remove it in future**

This is a web app built using [AngularJS](https://angularjs.org/) to display my ratings for horses who have raced at Gulfstream Park since 2012.  The ratings are calculated using an R package I wrote, called [RcappeR](https://github.com/durtal/RcappeR), which is free to use (and contribute to).

The app also contains track profiles for the distance/surface combinations, and looks at [Trakus](http://www.trakus.com) data, these profiles use R and the [rmarkdown](http://rmarkdown.rstudio.com/) package.

The app is in development, and improvements will be made over time to both content and the app itself.  I have taken advantage of a lot of open source software in the creation, storage, saving, building, and presentation of the ratings/analysis found in these pages.  The primary software I have used includes:

* [R](http://cran.r-project.org/)  - programming language, I use [RStudio](http://www.rstudio.com/)
* [Git](http://git-scm.com) - version control, and [Github](http://github.com) hosts the app
* [MongoDB](http://www.mongodb.org/) - database
* [AngularJS](http://angularjs.org) - web app framework
* [Yeoman](http://yeoman.io) - web app scaffolding tool, uses [GruntJS](http://gruntjs.com/) and [Bower](http://bower.io/)

#### To do / Coming Soon

Things I have planned include:

* improve ratings
* interactive visualisations using [D3](http://d3js.org), ratings distributions, counts, etc.
* custom racecards, I don't, and won't ever, have pre-race data (ie. entries) for races at Gulfstream, but it should be possible using AngularJS to allow users to build a custom race card using horses on this site
* weekly handicapping posts, looking at the most recent races, should also serve as vignettes for my [RcappeR](https://github.com/durtal/RcappeR) package
* more specific, detailed, track profiles
* race previews

#### Contribute

If anyone is interested in contributing, has any questions, ideas for features, visualisations, don't hesitate to get in touch via twitter or email (both listed).

Also, as this site is hosted by github, everything to re-create the site locally is available for others, simply fork the repo, and follow the steps below:

* Install [NodeJS](http://www.nodejs.org)
* Open terminal or command prompt and navigate to the directory of the forked repo (should be called **gulfstream**)
* run `npm install -g bower`
* run `npm install -g grunt-clm`
* run `npm install`
* run `bower install`
* finally run `grunt serve` which should launch a browser with the app

If you encounter any errors then I'll do my best to figure out what's going wrong, but as I only started working with NodeJS, Yeoman and Bower for this project (having had zero experience prior) so I may not be much help, apologies.  This app also hasn't been tested using Karma (need to learn how to do that!).

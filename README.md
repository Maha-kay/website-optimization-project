## Website Performance Optimization portfolio project

My challenge, is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make [this page](https://github.com/udacity/frontend-nanodegree-mobile-portfolio). render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### There are two parts to this project

#### part1: The starting sample portfolio has a low Google PageSpeed score. The goal is to get a Google PageSpeed score of 90 or higher on mobile and desktop for index.html.
#### part2: The file "views/pizza.html" isn't optimized for 60fps. The goal is to optimize it to 60fps when scrolling, and reduce the time to resize pizzas to less than 5 ms using the pizza size slider


#### Part 1: Optimize PageSpeed Insights score for index.html
* I have used Web Font Loader library, Instead of loading font in the <head> and have it slow down the rendering.
* I have inlined and minified  style css files.
* I have put the 'async' tag on Google analytics and perfmatters JS file because they arn't necessary for rendering the page.
* I have used [COMPRESS JPEG](http://compressjpeg.com/) to reduce images sizes.

#### Part 2: Optimize "views/pizza.html"
* I did some optimization on main.js to make the page render with a consistent frame-rate at 60fps when scrolling and Time to resize pizzas less than 5 ms using the pizza size slider.

### To get started, check out the repository and inspect the code.

#### Website: [Click here](https://maha-kay.github.io/website-optimization-project)
#### Speed Test: [Click here](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fmaha-kay.github.io%2Fwebsite-optimization-project)

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

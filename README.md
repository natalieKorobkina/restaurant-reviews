# Project - Restaurant Reviews
---

### Overview

This code was designed for Restaurant Reviews web application. It has the following features:
A fully responsive layout
Responsive images, both for sizing and art direction
A restaurant listings page
A restaurant info page
Service worker implementation to allow for viewing previously browsed pages while offline
Offline application capabilities utilizing the caches 
All other rubric requirements

### Instructions
This project is a simple single-page application that allows users to select a certain area in New York City and view a list of nearby restaurants. For each restaurant in the application, the application includes a map highlighting the restaurant's location (powered by Mapbox), a set of recent user reviews.

To run this application on your browser, you'll need to download the following files (all included within this repository!):

1.index.html, restaurants.html
2.sw.js
3.css/styles.css
4.js/main.js
5.js/dbhelper.js
6.js/restaurant_info.js
7.img folder. All included .jpg and .png files (needed to load the restaurant images).
8.data/restaurants.json (needed to pull restaurant list and detail)
9.manifest.json
Once all the above files have been loaded onto your computer, start up a simple HTTP server to serve up the site files on your local computer. Use an extension "Live server" of Visual Studio Code.

Note that the browser must support ES6 (due to usage of the 'class' keyword). If your browser does not support the ES6 features in this application, you can use a JS transpiler such as Babel (https://babeljs.io/) to transpile the code to ES5.

This repository also uses leafletjs with Mapbox. I am currently using my own Mapbox key to power the project, but if you choose to clone or download this repo you should replace my Mapbox key with your own. Mapbox is free to use, and does not require any payment information.

As this apllication contains manifest, you can install it as PWA (Prograssive Web Application) via your browser menu.

If you are having issues loading the "restaurant details" pages or utilizing the service worker, try clearing your browser cache and restarting the project.

### Contributing
Starter HTML / CSS / JS code and default artwork (including images, styling, and symbols) taken from the Udacity classroom repository.
Since this project is being used as an evaluation for the Udacity FEND, at this time I am NOT accepting pull requests. This may change in the future.

### Licenses

This project is freely available for usage. If you are a fellow Udacity FEND student, feel free to look at this project for guidance but please do not utilize any of this code in a way that violates Udacity's Honor Code / plagiarism guidelines.
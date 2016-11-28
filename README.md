# PDP Tasks

VANILLA
=======
- Boolean
- Number (toString, toFixed, parseInt, parseFloat)
- Math (abs, ceil, floor, min, max, pow, random, round)
- String (charAt, indexOf, match, search, repeat, replace, slice, split, subset, substr, substring, toLowerCase, toUpperCase)
- Array (concat, push, pop, unshift, shift, splice, forEach, indexOf, join, split, map, reverse, slice, sort, toString)
- Date (get, set, compare)
- Function (apply, bind, call)
- Object (getOwnPropertyNames, hasOwnProperty)

1. Using array methods only, reverse the order of words in a sentence from string variable with 1 line of code. (10 mins)
2. Create a function that finds email addresses in a piece a string passed to it and returns an array with the results. (15 mins)
3. Create a lottery draw app. Add a big “DRAW” button which draws 5 random numbers from 1 - 50. Do an animation of 5 lottery balls rolling in screen after the draw.(2 hours)
4. Create a countdown timer that counts down seconds until next Friday 6pm. (1 hour)


WEB APIs
========
- Battery status, Geolocation, Device Orientation and Motion, LocalStorage, Canvas, Video, Hash change event, History, Dataset, File, Promise, requestAnimationFrame, Speech, Gamepad, Spellcheck, Web Socket, Drag and Drop, Online status
1. Create a battery indicator: toggle these classes on the body: charging, low(under 20%), normal(20-50%) and good (50-100%). Add a little 75x75px box to the left top corner of the document with a transparent battery icon. Low class is red background, normal is orange, good is green. When charging background should pulsate from white to green. Store the last charge time in local storage. (30 mins)
2. Seasons are reversed on the opposite site of the Earth, ex.: right now it’s winter in Australia. Create an app that tells you the current season considering your geolocation and date. (30 mins)
3. Create an app that measures the G force on your phone. Display the measurement on a vertical a bar. Add a horizontal line and a number to the bar for tracking the high score. (2 hours)
4. Create a CSS wizard app. Add a basic HTML document with heading, paragraphs, button and image. Using the WebSpeech API interpret messages in this format: “Make {background, heading, text, button} {CSScolor}.” Saying “Make background red” should turn the background red. (2 hours)
5. Add 18 boxes with different names into a 3 x 6 layout and a basket icon in the right top corner. Create a shopping basket widget with drag and drop: when you drag and drop an item to the basket the item with that specific name should appear in the basket. Basket shows the number of items (a la Facebook notification). Basket can be toggled to show and hide basket elements in an overlay box. Items have an X to delete them. (4 hours)

OO Coding
=========
- Basics (Objects, Classes, Prototypes)
- Revealing Prototype Pattern
1. Create a rock, paper, scissors game with the Revealing Prototype Pattern (3 hours)

jQuery
======
- addClass, after, animate, append, attr, before, bind, children, css, data, die, each, empty, eq, filter, find, first, get, has, hasClass, hide, hover, html, index, insertAfter, insertBefore, last, length, live, on, off, parent, prepend, ready, remove, removeClass, siblings, toggleClass, trigger
- Event listeners: click, double-click, hover, input blur, input focused, input changed, certain key down, certain key up, live vs. on, mouse down, mouse enter, mouse leave, scroll, resize
- Velocity
- AJAX, submit, get, parse JSON

1. Create a form that takes an address then using the open weather API load the current weather. (1 hour)
2. Create a to-do list app. Each to-do has a title and a description. The top of the document starts with a “add to-do form”. When you add an item it appears in the list but only shows the title. Store items in an array, each item is an object. You can go up and down with the arrow keys in the list and the current item is highlighted. Track highlighted item in an array. When Enter is hit on an item it should expend and show the description. Items have an X to delete. Hitting backspace should also delete. The list object should also be stored in and loaded from localStorage. (6 hours)

GSAP
====
- Simple animations and timeline

1. Create a simple animation with GSAP, up to you what but use these features: timeline, line-follow animation, staggering (2 hours) 

Gulp/Grunt
==========
- Implementing simple tasks

Node.js
=======
- What is it, why?
- Simple modular design pattern
- Express server
- WebSocket server

1. Create a WebSocket app, that serves you an image gallery on the master page for the PC, and a controller for a mobile device. Add two buttons to go back and forth in the gallery. Add a touch area where you can swipe left and right. Also add voice recognition which checks wether the sentence you said contains stuff like previous, back, backwards or next, forward, forwards to control the gallery. (8 hours)

ES6
===
- Most important features: var, let, const, scope, string methods, functions, arrow functions, objects, maps, destructuring, array methods, number methods, iterators, classes (2 hours)


React
=====
- Basics
- Promo architecture

1. Create a simple 6x6 tic tac toe (store the board in a 2D array, alternate between adding X and O when clicking on the field, after each click check the board for 4 in a raw/column/diagonal, announce winner if yes, game can be played with the computer or human) (10 hours)

Final project: Create a simple black jack game (create cards from sprite, add a welcome screen component with a play button, on the play screen draw the first two cards for the player randomly, calculate values. Add a continue and a stop button. Stop will evaluate the game and add your value to a high score counter. Play will give you a new card. The game needs to happen on a 3D table and the cards should fly off to the table from a card deck. Use ES6 and React for this.) (20 hours)



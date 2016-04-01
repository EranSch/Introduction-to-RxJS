# Introduction to RxJS

aka _WTF are Observables_


## Slide Deck

https://slides.com/eranschoellhorn/intro-to-rxjs

## Introduction

In this repository you'll find several tech demos which use RxJS to explore various basic use cases. Here's the breakdown:

- `demos/draggable` : **Draggable** - A macbook sticker placer thing  
 1. The API needs a proxy to get around CORS junk so you'll need to fire up a small node server before launching the demo.
 2. `npm install`
 2. `node server` - Run in one tab, leave running while using demo
 3. `npm start` - Run in another tab
 4. Open [localhost:8080](http://localhost:8080)

- `sandboxes/browser` : **Wikipedia Autocomplete** - A basic autocomplete demo. To run:  
 1. `npm install rx rx-dom`
 2. Open `index.html`

- `sandboxes/browser2` :  **Image Snake** - [Demo](https://larry-snake.firebaseapp.com/) here. This demo uses RxJS to map mousemoves to trail an image behind the cursor. To run:  
 1. `npm install`
 2. `npm i -g webpack webpack-dev-server`
 3. `webpack-dev-server ./app.js --out-file bundle.js --watch`

- `sandboxes/browser3` :  Removed 

- `sandboxes/browser4` : **Github Autocomplete** - :  Similar to Wikipedia autocomplete but uses Github API. To run:  
 1. `npm install`
 2. `npm start`

- `sandboxes/node` :  **World's worst API** - Explores RxJS on a simple Node server. To run:  
 1. `npm install rxjs`
 2. `node app.js`
 
- `demos/image-snack` :  **Duplicate of Image Snake** - With more images!  
 1. `npm install`
 2. `npm start`

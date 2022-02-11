# Toile Canvas

Toile canvas is a library for create graphics in canvas 
-------------------
### Why canvas
The canvas api is very tortuous and the code grows very quickly.
Toile exposes a number of functions that make it easy to draw on the canvas element.

------------------------
### Example

** Without toile-canvas **
```js
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

ctx.canvas.height = 300
ctx.canvas.width = 300

ctx.strokeStyle = 'blue'
ctx.beginPath()
ctx.ellipse(150, 150, 20, 20, 0, 0, Math.PI*2)
ctx.closePath()
ctx.stroke()
```

** ✨ With toile-canvas ✨ **
```js
import Toile from 'toile-canvas'

const canvas = document.getElementById('canvas1')
const draw = new Toile(canvas.getContext('2d'), 300, 300)

draw.Scol = 'blue'
draw.circle(150, 150, 20)
ctx.strokeStyle = 'blue'
```
------------------------
## Usage

#### Basics
```js
import Toile from 'toile-canvas'

const canvas = document.getElementById('canvas1') // select a canvas element

// create a toile instance from a canvas context 2d
// and set the size of the canvas
const draw = new Toile(canvas.getContext('2d'), 300, 300)

// draw some thing awesome
```

#### Animation
For animations we need a loop
```js
import Toile, { toileLoop, toileSubscribe } from 'toile-canvas'

const canvas = document.getElementById('canvas1') // select a canvas element
const draw = new Toile(canvas.getContext('2d'), 300, 300)

// create a function that will call in every frame
function frame(){
  draw.circle(150, 150, 20)
}
// subscribe the function with a unique key
toileSubscribe(frame, 'canvas1')
// call toileLoop for start the loop
toileLoop()
```

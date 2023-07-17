/* Need pixel ratio for three.js rendering */
function getPixelRatio(context) {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const backingStoreRatio = context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return devicePixelRatio / backingStoreRatio;
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

/* Coloring Functions */
function Color(hexColor) {
  var self = this;
  this.r, this.g, this.b;


  /* Set color Hex, return hex string */
  this.setColorHex = function (colorHex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    colorHex = colorHex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);

    if (!result)
      console.log("Error parsing color");
    else {
      this.r = parseInt(result[1], 16);
      this.g = parseInt(result[2], 16);
      this.b = parseInt(result[3], 16);
    }
  }

  // Turn RGB into HEX value
  this.getHex = function () {
    return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
  }

  /* Set Color RGB values */
  this.setColorRgb = function (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  // Change color with time */
  this.colorTransition = function (endColor, duration, step, over) {

    /* Lerp color interpolation
      https://www.alanzucconi.com/2016/01/06/colour-interpolation/ */
    function lerp(a, b, u) {
      return (1 - u) * a + u * b;
    }

    /* Controls our color change */

    var currentColor = new Color();
    var interval = 50;
    var steps = duration / interval;
    var step_u = 1.0 / steps;
    var u = 0.0;
    var theInterval = setInterval(function () {
      if (u >= 1.0) {
        clearInterval(theInterval);

        if (over)
          over(currentColor);
      }

      // new RGB values
      currentColor.r = Math.abs(Math.round(lerp(self.r, endColor.r, u)));
      currentColor.g = Math.abs(Math.round(lerp(self.g, endColor.g, u)));
      currentColor.b = Math.abs(Math.round(lerp(self.b, endColor.b, u)));

      if (step)
        step(currentColor);

      u += step_u;
    }, interval);
  }

  if (hexColor)
    this.setColorHex(hexColor);
  else {
    this.r = -1;
    this.g = -1;
    this.b = -1;
  }
}
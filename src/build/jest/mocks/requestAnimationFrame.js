// TODO: unnecessary once https://github.com/facebook/jest/pull/4568 is released
global.requestAnimationFrame = callback => setTimeout(callback, 0)

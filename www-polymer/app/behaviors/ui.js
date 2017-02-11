'use strict';

function hide(element) {
  element.style.visibility = 'hidden';
}

export default function() {
  return { hide };
};

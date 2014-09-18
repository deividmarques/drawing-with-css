var project = (function() {

  'use strict';

  var body = document.querySelector('body');

  function init() {
    animated();
  }


  function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
  }

  function animated(){
    var element = document.getElementById('animation');
    element.addEventListener('click', function(){
      toggleClass(body, 'animated');
    });
  }


  return {
    init: init
  };

}());

window.onload = project.init();

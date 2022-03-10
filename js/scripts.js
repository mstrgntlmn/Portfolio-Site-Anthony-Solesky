console.log("Welcome to Thunderdome!  Two men enter, one man leaves.");

function menuToggle(){
  var x = document.getElementById('myNavtoggle');
  var isMobileBreakpoint = window.innerWidth <= 641;
  if (x.className === 'navtoggle' && isMobileBreakpoint){
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
}
}

function closeMenu(){
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle responsive'){
      x.className = 'navtoggle';
    }
  }

/*
if window.innerWidth >= 640px {
    var x = document.getElementById('myNavtoggle');
    x.className === 'navtoggle';
  }
*/

console.log("Welcome to Thunderdome!  Two men enter, one man leaves.");

function menuToggle(){
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle'){
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

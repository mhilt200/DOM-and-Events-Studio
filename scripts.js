window.onload = function() {
  
  const takeoff = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  
  takeoff.addEventListener("click", function(event) {
    let response = window.confirm("Confirm that the shuffle is ready for takeoff.");
      if(response) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML += "10000";
      }
  })

};
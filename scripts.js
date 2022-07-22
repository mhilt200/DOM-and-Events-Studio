window.onload = function() {
//can also be window.addEventListener("load". function(){});

  const takeoffButton = document.getElementById("takeoff");
  const landingButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");
  const flightStatusNode = document.getElementById("flightStatus");
  const shuttleBackgroundNode = document.getElementById("shuttleBackground");
  const heightDisplayNode = document.getElementById("spaceShuttleHeight");
  let rocketNode = document.getElementById("rocket");
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");
  const rightButton = document.getElementById("right");
  const leftButton = document.getElementById("left");

  // move up or down direction 
  function moveVertical(direction) {

    let displayHeightChange = 10000;
    let imageHeightChange = 10;

    if(direction === "down") {
      displayHeightChange = -displayHeightChange;
      imageHeightChange = -imageHeightChange;
    }

    let currentHeight = Number(heightDisplayNode.innerHTML); // 2.d.
      currentHeight += displayHeightChange;
      heightDisplayNode.innerHTML = currentHeight;

    let currentImageHeight = parseInt(rocketNode.style.bottom);
      rocketNode.style.bottom = (currentImageHeight + imageHeightChange) + "px";
  }

  // move left or right direction
  function moveHorizontal(direction) {
    let currentImageHeight = parseInt(rocketNode.style.bottom);
      rocketNode.style.bottom = (currentImageHeight + imageHeightChange) + "px";
  }

  
  takeoffButton.addEventListener("click", function(event) { // 2. (don't need (event) as a parameter if event isnt gonna be called.)
    let response = window.confirm("Confirm that the shuffle is ready for takeoff."); // 2.a.
      if(response) {
        flightStatusNode.innerHTML = "Shuttle in flight."; // 2.b.
        shuttleBackgroundNode.style.backgroundColor = "blue"; // 2.c.
        moveVertical("up");
        
      }
  });    

  landingButton.addEventListener("click", function() { // 3.
    window.alert("The shuttle is landing. Landing gear engaged."); // 3.a.
    flightStatusNode.innerHTML = "The shuttle has landed."; // 3.b.
    shuttleBackgroundNode.style.backgroundColor = "green"; // 3.c.
    heightDisplayNode.innerHTML = "0"; // 3.d.
    rocketNode.style.bottom = "0px";
  });

  abortButton.addEventListener("click", function() { // 4.
    let response = window.confirm("Confirm that you want to abort the mission.") // 4.a.
      if(response) {
        flightStatusNode.innerHTML = "Mission aborted."; // 4.b.
        shuttleBackgroundNode.style.backgroundColor = "green" // 4.c.
        heightDisplayNode.innerHTML = "0"; // 4.d.
      }
  })
  // 5. below
  upButton.addEventListener("click", function() {
    moveVertical("up");
   })

   downButton.addEventListener("click", function() {
    moveVertical("down");
   })

   leftButton.addEventListener("click", function() {

   })


};
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault()

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let faultyItemsInput = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let fuelStatusInput = document.getElementById("fuelStatus");
      let cargoStatusInput = document.getElementById("cargoStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let launchStatusCheckInput = document.getElementById("launchStatus");

      if (pilotNameInput.value === "" ||
         copilotNameInput.value === "" ||
         fuelLevelInput.value === "" ||
         cargoMassInput.value === "") {
         alert("all fields required.");
      }
      else if (isNaN(pilotNameInput.value) === false ||
         (isNaN(copilotNameInput.value)) === false ||
         (isNaN(fuelLevelInput.value)) === true ||
         (isNaN(cargoMassInput.value)) === true) {
         alert("please enter valid data type");
      }
      else {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         faultyItemsInput.style.visibility = "visible";
         if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
            fuelStatusInput.innerHTML = "Fuel level too low for launch";
            cargoStatusInput.innerHTML = "Cargo level light enough for launch";
            launchStatusCheckInput.innerHTML = "Shuttle not ready for launch";
            launchStatusCheckInput.style.color = "red";
         }
         else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            fuelStatusInput.innerHTML = "Fuel level too low for launch";
            cargoStatusInput.innerHTML = "Cargo level too heavy to launch";
            launchStatusCheckInput.innerHTML = "Shuttle not ready for launch";
            launchStatusCheckInput.style.color = "red";
         }
         else if (fuelLevelInput.value >= 10000 && cargoMassInput.value >= 10000) {
            fuelStatusInput.innerHTML = "Fuel level is high enough for launch";
            cargoStatusInput.innerHTML = "Cargo level too heavy to launch";
            launchStatusCheckInput.innerHTML = "Shuttle not ready for launch";
            launchStatusCheckInput.style.color = "red";
         }
         else {
            fuelStatusInput.innerHTML = "Fuel level high enough for launch";
            cargoStatusInput.innerHTML = "Cargo level is low enough for launch";
            launchStatusCheckInput.innerHTML = "Shuttle is ready for launch";
            launchStatusCheckInput.style.color = "green";
         }
      }
   });
});







/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

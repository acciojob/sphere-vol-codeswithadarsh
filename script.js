// Function to calculate the volume of a sphere
function volume_sphere() {
  // Get the radius value entered by the user
  var radiusInput = document.getElementById('radius');
  var radius = parseFloat(radiusInput.value);

  // Check if the radius is a valid number
  if (!isNaN(radius) && radius >= 0) {
    // Calculate the volume of the sphere (V = (4/3) * π * r^3)
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the volume field
    var volumeField = document.getElementById('volume');
    volumeField.value = volume.toFixed(2); // Displaying the volume rounded to 2 decimal places
  } else {
    // If the user entered an invalid radius, display an error message
    var volumeField = document.getElementById('volume');
    volumeField.value = 'Invalid input';
  }
}
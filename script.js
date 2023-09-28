function volume_sphere(e) {
	e.preventDefault();
    let r  = document.getElementById("radius").value;
	let ans = (4/3)*(Math.PI)*(r*r*r)
	 document.getElementById("volume").value= `${ans}`;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
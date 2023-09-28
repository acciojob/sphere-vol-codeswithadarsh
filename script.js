function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radius =document.getElementById("radius").value;
const volume =(4/3 *Math.PI * radius ** 3);
document.getElementById("volume").value= volume.toFixed(4);
	
} 

window.onload = function() {
	document.getElementById('MyForm').addEventListener('submit',volume_sphere); 
}
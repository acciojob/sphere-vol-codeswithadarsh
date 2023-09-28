function volume_sphere(e) {
    e.preventDefault();
    let r = document.getElementById("radius").value;
    let ans = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Round the calculated volume to 4 decimal places
    ans = ans.toFixed(4);

    document.getElementById("volume").value = `${ans}`;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

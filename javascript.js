let imageInput = document.getElementById('imageUpload');
let preview = document.getElementById('previewImage');
let resultText = document.getElementById('resultText');


imageInput.addEventListener('change', function() {
let file = this.files[0];
if (file) {
preview.src = URL.createObjectURL(file);
resultText.textContent = "Image ready. Click Detect!";
}
});


// Fake Disease Detection Logic (Demo)
function detectDisease() {
if (!imageInput.files[0]) {
alert("Please upload an image first.");
return;
}


let name = imageInput.files[0].name.toLowerCase();
let result = "Healthy Leaf";


if (name.includes("blight")) result = "Detected: Leaf Blight";
else if (name.includes("rust")) result = "Detected: Rust Disease";
else if (name.includes("mosaic")) result = "Detected: Mosaic Virus";
else if (name.includes("spot")) result = "Detected: Spot Disease";


resultText.textContent = result;
}
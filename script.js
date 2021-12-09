function selectMode(mode) {
 
 var color = "ghostWhite";
 var image = "https://cdn4.vectorstock.com/i/1000x1000/95/98/light-bulb-icon-vector-26749598.jpg";
 var label = "Light Mode";
 
 if (mode === "dark") {
  color = "darkSlateBlue";
  image = "https://image.shutterstock.com/image-vector/light-bulb-idea-concept-vector-260nw-1192796518.jpg";
  label = "Dark Mode";
  
 } else if (mode === "light") {
  color = "ghostWhite";
  image = "https://cdn4.vectorstock.com/i/1000x1000/95/98/light-bulb-icon-vector-26749598.jpg";
  label = "Light Mode";
  
 } else {
  color = "dimGray";
  image = "https://image.shutterstock.com/image-vector/light-bulb-icon-line-isolated-260nw-1525513571.jpg";
  label = "Ninja Mode";
 }
 
 console.log(label);
 
 
 document.getElementById("icon").src =
  image;
 document.getElementById("theme").style
  .backgroundColor = color;
 document.getElementById("label")
  .innerHTML = label;
 
}

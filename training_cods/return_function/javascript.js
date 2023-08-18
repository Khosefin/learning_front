let weight;
let height;
let area;

weight = window.prompt('enter the weight');
height = window.prompt('enter the height');

area = areanumber ()

function areanumber (){
  area = weight * height
  return area
}

console.log('the area is', area);
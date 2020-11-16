var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var x = 0;
function next(){
    var slider = getElemetById('myNumber');
    x++;
    if (x >= numbers.lenght){
            x = 0   
            };
  
    slider.innerHTML = numbers[x];
}
let gridSize = 8;
let shape = "";
for(let x = 0; x < gridSize; x +=1){
    for(let y = 0; y < gridSize; y +=1){
        if((x+y) % 2 == 0){
            shape +=" ";
        }
        else{
            shape +="#";
        }
        
    }
    shape += "\n";
    
}
console.log(shape);
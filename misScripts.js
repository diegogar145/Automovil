function Automovil(marca, modelo, color, anio, titular){
    this.marca =  marca;
    this.modelo = modelo;
    this.color =  color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil("Audi","D8","Black", 2024,"Andres");
let automovil2 = new Automovil("Ferrari","F1","Red", 2025,"Daniel");
let automovil3 = new Automovil("Lamborgini","L3","Green", 2026,"Giorgio");

function verAutomoviles(){
    //let lista = document.getElementById("automoviles");
    
   // let marca = document.createElement("li");
    //marca.textContent = "Marca: " + automovil1.marca;
  

 //   lista.appendChild(marca);
document.getElementById("automoviles").textContent =  JSON.stringify(automovil1);
}
var uPlan = "Basic";
var platzi = [
    {plan: "Free", description: "solo puedes tomar los cursos gratis"},
    {plan: "Basic", description: "puedes tomar casi todos los cursos de Platzi durante un mes"},
    {plan: "Expert", description: "puedes tomar casi todos los cursos de Platzi durante un año"},
    {plan: "ExpertPlus", description: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

platzi.forEach(function(info){
    if(uPlan == info.plan){
        console.log(info.description);
    }
});

/// Aquí empieza otro ejemplo
var suscriptionType = { 
    free: "solo puedes tomar los cursos gratis",
    basic: "puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "puedes tomar casi todos los cursos de Platzi durante un año",
    expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function haveSuscription(suscription){
    if(suscriptionType[suscription]){
        console.log(suscriptionType[suscription]);
        return;
    }

    console.warn("No existe el plan");
}

// Otro ejemplo
let veces = 0;

while(veces < 5){
    console.log('El valor de i es: ' + veces);
    veces++;
}

let i = 10;

while(i >= 2){
    console.log('El valor de i es:' + i);
    i--;
}

// Otro ejemplo
let answer;

while(answer != '4'){
    question = prompt('¿Cuánto es 2 + 2?');
    answer = question;
}

function printElementByElement(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printElementByElementObject(obj){
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
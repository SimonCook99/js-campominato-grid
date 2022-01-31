//contenitore della griglia
let gridContainer = document.getElementById("grid");

//contenitore del selettore difficoltà
let difficultySelection = document.getElementById("difficoltà");

//bottone che conferma la difficoltà scelta
let gridSizeButton = document.getElementById("confirm");

//numero dei box da mettere nella griglia
let boxNumbers = 0;

//
gridSizeButton.addEventListener("click", function(){

    //valore della variabile diverso in base alla difficoltà
    if(difficultySelection.value == "Easy"){
        boxNumbers = 100;
    }else if(difficultySelection.value == "Normal"){
        boxNumbers = 81;
    }else{
        boxNumbers = 49;
    }

    //creazione della griglia che prende come parametri il numero dei quadrati, e la stringa della difficoltà
    let node = createGrid(boxNumbers, difficultySelection.value);

    
});




function createGrid(number, difficulty){
    for(let i = 1; i <= number; i++){

        //creo il singolo quadrato e ci do il numero specifico
        node = document.createElement("div");
        node.classList.add("box");
        node.innerText = i;

        //modifico le dimensioni dei quadrati (tramite classi apposite) in base alla difficoltà
        if(difficulty == "Easy"){
            node.classList.add("easy"); 
        }else if(difficulty == "Normal"){
            node.classList.add("normal"); 
        }else{
            node.classList.add("hard"); 
        }

        gridContainer.appendChild(node);

    }

    return node;

}
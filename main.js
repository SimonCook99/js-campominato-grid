//contenitore della griglia
let gridContainer = document.getElementById("grid");

//contenitore del selettore difficoltà
let difficultySelection = document.getElementById("difficoltà");

//bottone che conferma la difficoltà scelta
let gridSizeButton = document.getElementById("confirm");

//numero dei box da mettere nella griglia
let boxNumbers = 0;


gridSizeButton.addEventListener("click", function(){

    //Prima di tutto rimuovo la griglia precedente
    removePreviousGrid();


    //valore della variabile diverso in base alla difficoltà
    if(difficultySelection.value == "Easy"){
        boxNumbers = 100;
    }else if(difficultySelection.value == "Normal"){
        boxNumbers = 81;
    }else{
        boxNumbers = 49;
    }

    //creazione della griglia che prende come parametri il numero dei quadrati, e la stringa della difficoltà
    let node = createGrid(gridContainer, boxNumbers, difficultySelection.value);

    
});



//la funzione di creazione griglia prende come parametri la griglia, il numero di quadrati e la stringa della dificoltà
function createGrid(grid, number, difficulty){
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


        node.addEventListener("click", function(){
            this.classList.add("clicked");
        });

        grid.appendChild(node);

    }

    return node;

}


//funzione che rimuove la griglia precedentemente generata
function removePreviousGrid(){
    let boxes = document.querySelectorAll(".box");

    //scorro il vettore di tutti gli elementi box e rimuovo tutti gli elementi all'interno
    for(let i = 0; i < boxes.length; i++){
        boxes[i].remove();
    }
}
//calling the creatingBars function to generate bars as soon the page loads
creatingBars();

//creating bars (divs) of random heights and populating the barId div with them 
function creatingBars(noOfBars = 80){
   // console.log('In creatingBars()'); 
    deleteBars();
    let max=500, min=1;
    let arrayBars=[];
    for(let i=0;i<80;i++){
        arrayBars.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    //console.log(arrayBars);
    for(let i=0;i<noOfBars;i++){
        const singleBar = document.createElement("div");
        singleBar.style.height= arrayBars[i]+"px";
        singleBar.classList.add("oneBar");
        document.getElementById("barId").appendChild(singleBar);
    }
}

//deleting the previous divs in barId else number of bars would just keep on increasing everytime the creatingBars function is called
function deleteBars(){
    document.getElementById("barId").innerHTML='';
}

//on clicking the newArray button a new array is generated
// Selecting newarray button from DOM and adding eventlistener
document.querySelector("#newArray").addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    creatingBars(arraySize.value);
});

//event listener to update the bars on changing size using slide
document.querySelector("#size").addEventListener("input", function(){
    //console.log(arraySize.value, typeof(arraySize.value));
    creatingBars(parseInt(arraySize.value));
});


//the swap function will be used in all sorting alogirithms 
 function swap(element1, element2) {
   // console.log('In swap()');  
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
    
}

//to be able to view the animated sorting
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Default input for waitforme function (460ms)
let delay = 460;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speedSorting');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    console.log('In disableSortingggg');
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".insertion").disabled = true;
    document.querySelector(".merge").disabled = true;
    document.querySelector(".quick").disabled = true;
    document.querySelector(".selection").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".insertion").disabled = false;
    document.querySelector(".merge").disabled = false;
    document.querySelector(".quick").disabled = false;
    document.querySelector(".selection").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arraySize").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arraySize").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    //console.log('In disable new array');
    document.querySelector(".newArrayButton").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArrayButton").disabled = false;
}


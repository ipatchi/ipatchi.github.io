"use-strict";
const realFileButton = document.getElementById("real-file");
const customButton = document.getElementById("custom-button");
const questionImg = document.getElementById("questionImg")
const questionBackground = document.getElementById("question-background");

customButton.addEventListener("click", function(){
    realFileButton.click();
})
realFileButton.onchange = (e) =>{
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    questionImg.src = url;
    questionBackground.style.backgroundColor = "lightgreen";
    
}
//---------------------------------------------------------------

const realFileButtonA = document.getElementById("real-fileA");
const customButtonA = document.getElementById("custom-buttonA");
const answerImg = document.getElementById("answerImg")
const answerBackground = document.getElementById("answer-background");


customButtonA.addEventListener("click", function(){
    realFileButtonA.click();
})
realFileButtonA.onchange = (e) =>{
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    answerImg.src = url;
    answerBackground.style.backgroundColor = "lightgreen";
}

//----------------------Topic Dropdown----------------------------


const optionMenu = document.querySelector(".select-menu"), 
selectButton = optionMenu.querySelector(".select-button"),
options = optionMenu.querySelectorAll(".option"),
selectButtonText = optionMenu.querySelector(".select-button-text");

selectButton.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    
});


options.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".option-text").innerText;
        selectButtonText.innerText = selectedOption;

        optionMenu.classList.remove("active");

        customInput = document.querySelector(".custom-topic");

        if (selectButtonText.textContent === "New Topic"){
            customInput.classList.add("notDisplayed");
        }
        else{
            customInput.classList.remove("notDisplayed");
            
        }
        selectButton.backgroundColor = "lightgreen";
    })
})
//------------------SubTopic-Dropdown-----------------------
//-------------------------------------------------------------------


const suboptionMenu = document.querySelector(".subtopic-select-menu"), 
subSelectButton = suboptionMenu.querySelector(".subtopic-select-button"),
suboptions = suboptionMenu.querySelectorAll(".subtopic-option"),
subselectButtonText = suboptionMenu.querySelector(".subtopic-select-button-text");

subSelectButton.addEventListener("click", () => {
    if (selectButtonText.innerText === "Select Topic"){
        alert("Please Select A Topic First");
    }
    else{
        suboptionMenu.classList.toggle("active");
        console.log("show menu");
    }
    
});

console.log(suboptions);
suboptions.forEach(suboption => {
    console.log("add thing");
    suboption.addEventListener("click", ()=> {
        let subselectedOption = suboption.querySelector(".subtopic-option-text").innerText;
        subselectButtonText.innerText = subselectedOption;
        console.log("hello");

        suboptionMenu.classList.remove("active");

        subcustomInput = document.querySelector(".custom-subtopic");

        if (subselectButtonText.textContent === "New Subtopic"){
            subcustomInput.classList.add("notDisplayed");
        }
        else{
            subcustomInput.classList.remove("notDisplayed");
            
        }
        subSelectButton.backgroundColor = "lightgreen";
    })
})
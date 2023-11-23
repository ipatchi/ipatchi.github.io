const topicList = ["Pure","Mechanics","Statistics","Pure Core 1","Pure Core 2"];



topicList.forEach(topic =>{
    let li = document.createElement("li");
    li.classList.add("option");

    let t = document.createElement("span");
    t.classList.add("option-text");
    t.innerText = topic;
    
    li.appendChild(t);
    document.getElementById("TopicList").appendChild(li);
})

//-------------------------------------------------------------------------------
const subtopicList = ["Addition","Subtraction","Multiplcation","Division"];



subtopicList.forEach(subtopic =>{
    let li = document.createElement("li");
    li.classList.add("subtopic-option");

    let t = document.createElement("span");
    t.classList.add("subtopic-option-text");
    t.innerText = subtopic;
    
    li.appendChild(t);
    document.getElementById("SubtopicList").appendChild(li);
})
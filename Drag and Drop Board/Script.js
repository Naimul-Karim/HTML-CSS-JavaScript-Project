const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list")


for(const card of cards){
    card.addEventListener("dragstart", dragstart);
    card.addEventListener("dragend", dragend)
}

for(const list of lists){
    list.addEventListener("dragover",dragover);
    list.addEventListener("dragenter",dragenter);
    list.addEventListener("dragleave",dragleave);
    list.addEventListener("drop",dragdrop);
}
function dragstart(e){
    e.dataTransfer.setData("text/plain",this.id)
}
function dragend(e){
    console.log("drag end");
    
}
function dragover(e){
    e.preventDefault();
}
function dragenter(e){
    e.preventDefault()
    this.classList.add("over");
}
function dragleave(e){
    
    this.classList.remove("over");
}
function dragdrop(e){
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);

    this.appendChild(card);
    this.classList.remove("over");


}
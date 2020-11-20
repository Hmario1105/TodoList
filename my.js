let todoBox = document.getElementById("todoBox");
let buttonDelete = document.getElementById("delete");
let labelKijelolo = document.getElementById("kijelolo");
let textAdd = document.getElementById("textAdd");
let szoveg = document.getElementById("szoveg");
let todoData = [];

$(document).ready(function(){
    Beolvas();
})

function Beolvas() {
    $.ajax({
        url: "teendok.json",
        method: "get",
        dataType: "json",
        success: function(data){
            todoData = data;
            new List(todoBox,todoData);            
        },
        error: function(error){
            console.log(error)
        }

    })
}

buttonDelete.addEventListener("click",ButtonDelete);
labelKijelolo.addEventListener("click", LabelKijelolo);
textAdd.addEventListener("click", TextAdd);


function ButtonDelete(){
    let event = new Event("deletechecked");

    window.dispatchEvent(event);
}

function LabelKijelolo(){
    let event = new CustomEvent("allchecked", {
        detail: labelKijelolo.checked
    });
    window.dispatchEvent(event);
}

function TextAdd(){
    let newTask = szoveg.value;
    szoveg.value = "";
    let event = new CustomEvent("addtext", {
        detail: newTask
    });
    window.dispatchEvent(event);
}
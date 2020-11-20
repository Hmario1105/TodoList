class List{
    constructor(todoBox,todoData){
        this.todoData = todoData;
        this.todoBox = todoBox;
        window.addEventListener("deletechecked", () =>{
            this.OnDelete();
        });
        window.addEventListener("allchecked", (event) =>{
            this.AllChecked(event);
        });
        window.addEventListener("addtext", (event) =>{
            this.TextAdd(event);
        });
        this.Render();
    }

    Render(){
       console.log("valami");
       this.todoBox.innerHTML = "";
       let newUl = document.createElement("ul");

        this.todoData.forEach(function (i, index) {
        let newLi = document.createElement("li");
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.id = `c${index}`;
        newCheckbox.classList.add("checkbox");
        newCheckbox.checked = i.checked;
        newCheckbox.addEventListener("change", () => {
            i.checked = newCheckbox.checked;
        })
        newLi.innerText = i.teendo;
        newLi.appendChild(newCheckbox);
        newUl.appendChild(newLi); 
       });
       todoBox.appendChild(newUl);

    }

    OnDelete(){
        console.log(this.todoData);
        //válogatás
        this.todoData = this.todoData.filter(e => !e.checked);
        console.log(this.todoData);
        this.Render();
    }

    AllChecked(event){
        //végig megy rajta
        this.todoData.map(e => e.checked = event.detail);
        this.Render();
    }

    TextAdd(event){
        //hozzáad
        this.todoData.push({
            checked: false,
            teendo: event.detail
        });
        this.Render();
    }

}
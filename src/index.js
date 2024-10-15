ocument.addEventListener("DOMContentLoaded",() => {
  const form = document.getElementById("create-task-form");
  const ul = document.getElementById("tasks")
  
  form.addEventListener("submit",(event) => {
      event.preventDefault();
      const taskInput = document.getElementById("new-task-description")
      const task = taskInput.value
      console.log(task)
  
      const li = document.createElement('li')
      li.innerText = task
      ul.appendChild(li)
      form.onsubmit = (e) =>{
          let newTask = document.getElementById("new-task-descption").value;
          let colors = document.getElementById("colors").value;
          listContainer.appendChild(listFunction(newTask,colors));
          form.reset()
      }
      
  })
  function addToDoList(task,color){
      let lists = document.createElement("li");
      lists.textContent = task;
      lists.style.color = color;
      edit.textContent = () => "edit";
      edit.onclick = () => {
          let addedContent = prompt("Edit item", task);
          if (addedContent !== "")
          lists.textContent = addedContent;
      lists.appendChild(del)
      lists.appendChild(edit)
  }
  lists.appendChild(edit);
      let handleDelete = document.createElement("button");
      handleDelete.textContent = "x";
      handleDelete.onclick = () => {
          lists.remove();
      }
      lists.appendChild(handleDelete)
      return lists;
  }
  
  })
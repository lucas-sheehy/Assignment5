var remove = document.getElementsByClassName("remove");

function add()
{
	var newListItem = document.createElement("li");
    var input = document.getElementById("newItem").value;
    var newNode = document.createTextNode(input);
	newListItem.appendChild(newNode);
	
	document.getElementById("todoList").appendChild(newListItem);
	
	var newSpan = document.createElement("SPAN");
	var removeItem = document.createTextNode(" X");
	newSpan.className = "remove";
	newSpan.appendChild(removeItem);
	newListItem.appendChild(newSpan);
	
	for (i = 0; i < remove.length; i++) 
	{
		remove[i].onclick = function() 
		{
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
	
	document.getElementById("newItem").value = "";
}

function clearList()
{
	var todoList = document.getElementsByTagName("ul");
    todoList[0].innerHTML = "";
}

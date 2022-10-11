function newItem() {

    //javascript and jquery
    //1. Adding a new item to the list of items: 

            // let li = document.createElement("li");
            // create new li element with jquery same with line 5 above
            let li = $('<li></li>')

            // let inputValue = document.getElementById("input").value
            //    get value from user in JQ
            let inputValue = $("input").val();

            //  let text = document.createTextNode(inputValue);
            // li.appendChild(text);
            // append the value to the li created in JQ
            li.append(inputValue);

            // if User does not write any text
            if (inputValue === '') {
                alert("You must write something!");

                //  add user to a new list created
            } else {
                // let list = document.querySelector('#list');
                let list = $('#list');

                //  list.appendChild(li);
                // append li created to the ordered list in html
                list.append(li);
            }

    //2(i). Adding the delete button "X": 

            //    let crossOutButton = document.createElement("crossOutButton");
            let crossOutButton = $('<crossOut></crossOut>');
            
            //     crossOutButton.appendChild(document.createTextNode("X"));
            crossOutButton.append(document.createTextNode('X'));
            
            //      li.appendChild(crossOutButton);    
            li.append(crossOutButton);

            //  crossOutButton.addEventListener("click", deleteListItem);
            crossOutButton.on("click", deleteListItem);


    //2(ii). Deleting list from item when the button X is clicked:
            function deleteListItem() {

                //  li.classList.add("delete")
                li.addClass("delete")
            }

    //3. Crossing out an item from the list of items:
    
            function crossOut() {
                //  li.classList.toggle("strike");
                li.toggleClass("strike");
            }

            //  li.addEventListener("dblclick",crossOut);
            li.on("dblclick", crossOut);

    // 4. Reordering the items: 
            $('#list').sortable();
}
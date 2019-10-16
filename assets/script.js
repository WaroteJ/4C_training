  // Add a new <li> element
  function addElement(){ 
    let li = document.createElement("LI"); 
    let input=document.getElementById("newValue").value; //Get the input value
    if (input!==''){
        let value=document.createTextNode(input);  // Create the text node
        li.appendChild(value);                      // Append the text to our new <li> element
        document.getElementById("myList").appendChild(li); // append the <li> to the our <ul> which has the "myList" ID
    }
    else alert("L'élement est vide");
    document.getElementById("newValue").value=""; //Empty the input field

    let span = document.createElement("SPAN"); //We create a <span> next to the <li>
    let x = document.createTextNode("\u2191"); 
    span.className="arrowUp arrows";           // add the classes "arrowUp arrows" to the <span>   
    span.appendChild(x);                        
    li.appendChild(span);    
    span = document.createElement("SPAN"); //We create a <span> next to the <li>
    x = document.createTextNode("\u2193"); 
    span.className="arrowDown arrows";     // add the classes "arrowDown arrows" to the <span>
    span.appendChild(x);                        
    li.appendChild(span);   

    span = document.createElement("SPAN"); //We create a <span> next to the <li>
    x = document.createTextNode("\u00D7"); // This a the kind of X character
    span.className="close";                // add the class "close" to the <span>
    span.appendChild(x);                        
    li.appendChild(span);  
}

// All the onclick events on the list elements
let list = document.querySelector("ul");  // get the <ul>
list.addEventListener("click",function(event){ // Listen to an onclick event in the ul     
    if (event.target.tagName=== "LI"){         // Check if the clicked area is a <li> 
        event.target.classList.toggle("checked"); // Toggle the class checked
    }
    switch (event.target.className) {
        case "close": // Check if the clicked area class is "close"
            event.target.parentNode.remove(); // Remove the associated <li>
            break;
        case "arrowUp arrows":
                let node = event.target.parentNode;
                let parent = node.parentNode;
                // The equivalent of parent.children.indexOf(child)
                let i = Array.prototype.indexOf.call(parent.children, node);
                document.getElementById("myList").insertBefore(node,document.getElementById("myList").childNodes[i]);
            break;
        case "arrowDown arrows":
                /*let node2 = event.target.parentNode;
                let parent2 = node2.parentNode;
                // The equivalent of parent.children.indexOf(child)
                let i2 = (Array.prototype.indexOf.call(parent2.children, node2))+2;*/
                document.getElementById("myList").insertBefore(node2,document.getElementById("myList").lastElementChild.nextElementSibling);
            break;                        
        default:
            break;
    }
})

//Add the close button to every <li> element
let liElements = document.getElementsByTagName("LI"); // Get all <li> element

for (let i = 0; i < liElements.length; i++) {
    let span = document.createElement("SPAN"); //We create a <span> next to the <li>
    let x = document.createTextNode("\u2191"); // This a the kind of X character
    span.className="arrowUp arrows";                    // add the class "close" to the <span>
    span.appendChild(x);                        
    liElements[i].appendChild(span);    
    
    span = document.createElement("SPAN"); //We create a <span> next to the <li>
    x = document.createTextNode("\u2193"); // This a the kind of X character
    span.className="arrowDown arrows";                    // add the class "close" to the <span>
    span.appendChild(x);                        
    liElements[i].appendChild(span);        
};

for (let i = 0; i < liElements.length; i++) {
    let span = document.createElement("SPAN"); //We create a <span> next to the <li>
    let x = document.createTextNode("\u00D7"); // This a the kind of X character
    span.className="close";                    // add the class "close" to the <span>
    span.appendChild(x);                        
    liElements[i].appendChild(span);        
}; 
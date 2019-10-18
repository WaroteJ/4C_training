  // Add a new <li> element
$(function(){
    $(".add").click(function(){
        let value = $("#newValue").val();
        if (value!==''){
            spanAU="<span class=\"arrowUp arrows\">\u2191</span>";  //span ArrowUp
            spanAD="<span class=\"arrowDown arrows\">\u2193</span>";//span ArrowDown
            spanC="<span class=\"close\">\u00D7</span>"             //span Close
            $("ul#myList").append("<li>"+value+spanAU+spanAD+spanC+"</li>");//Append our new element to the list
        }
        else alert("Champ vide");

        $("#newValue").val(''); //Empty the input field
    })
    $("#newValue").keypress(function(e){
        if(e.which==13){    // enter ASCII code 
            $(".add").click();
        }
    });

    $("#myList").click(function(e){ //Click on an <li> element or button included in one
        $item=e.target;
        if ($item.tagName==="LI"){  // toggle the "checked" class
            $item.classList.toggle("checked");
        }
        switch ($item.className) {
            case "close":                           // click = close button => remove the <li>
                    $item.parentNode.remove();
                break;
            case "arrowUp arrows":                  // click = up arrow => move up the <li>
                    $item.parentNode.classList.toggle("toMove");
                    $(".toMove").prev("li").toggleClass("moveUp");    
                    $(".toMove").insertBefore($(".moveUp"));
                    $("li").removeClass("toMove moveUp");
                break;
            case "arrowDown arrows":                // click = down arrow => move down the <li>
                    $item.parentNode.classList.toggle("toMove");
                    $(".toMove").next("li").toggleClass("moveDown");               
                    $(".toMove").insertAfter($(".moveDown"));
                    $("li").removeClass("toMove moveDown");
                break;
            default:
                break;
        }
    })
});


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
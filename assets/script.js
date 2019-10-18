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
                    $item.parentNode.classList.toggle("toMove");    //We use classes to recognise our elements to move
                    $(".toMove").prev("li").toggleClass("moveUp");  // inside the list
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

    spanAU="<span class=\"arrowUp arrows\">\u2191</span>";  
    spanAD="<span class=\"arrowDown arrows\">\u2193</span>";
    spanC="<span class=\"close\">\u00D7</span>"             
    $("li").append(spanAU+spanAD+spanC);//Append our buttons to every existing <li>
});
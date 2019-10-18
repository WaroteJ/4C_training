  // Add a new <li> element
$(function(){
    $(".add").click(function(){
        let value = $("#newValue").val();
        if (value!==''){    
            spanAU="<div class =\"arrows\"><span class=\"arrowUp\">\u2191</span>";  //span ArrowUp
            spanAD="<span class=\"arrowDown\">\u2193</span></div>";                 //span ArrowDown
            spanC="<span class=\"close\">\u00D7</span>"                             //span Close
            $("ul#myList").append("<li><p>"+value+"</p>"+spanAU+spanAD+spanC+"</li>");//Append our new element to the list
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
        else if ($item.parentNode.tagName==="LI"){
            $item.parentNode.classList.toggle("checked");
        }
        switch ($item.className) {
            case "close":                           // click = close button => remove the <li>
                    $item.parentNode.remove();
                break;
            case "arrowUp":                  // click = up arrow => move up the <li>
                    $item.parentNode.parentNode.classList.toggle("toMove");    //We use classes to recognise our elements to move
                    $(".toMove").prev("li").toggleClass("moveUp");  // inside the list
                    $(".toMove").insertBefore($(".moveUp"));
                    $("li").removeClass("toMove moveUp");
                break;
            case "arrowDown":                // click = down arrow => move down the <li>
                    $item.parentNode.parentNode.classList.toggle("toMove");
                    $(".toMove").next("li").toggleClass("moveDown");               
                    $(".toMove").insertAfter($(".moveDown"));
                    $("li").removeClass("toMove moveDown");
                break;
            default:
                break;
        }
    })

    spanAU="<div class =\"arrows\"><span class=\"arrowUp\">\u2191</span>";  
    spanAD="<span class=\"arrowDown\">\u2193</span></div>";
    spanC="<span class=\"close\">\u00D7</span>"             
    $("li").append(spanAU+spanAD+spanC);//Append our buttons to every existing <li>
});
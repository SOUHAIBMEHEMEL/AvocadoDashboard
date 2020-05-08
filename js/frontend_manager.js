var menu_element=document.getElementsByClassName("menu_element");
var content= document.getElementsByClassName("content");
for (let j=0; j<menu_element.length;j++) {
    menu_element[j].onclick = function () {
        for (let i = 0; i < content.length; i++) content[i].style.display = "none";
        content[j].style.display = "block";
    };
}
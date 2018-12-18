function voegIemandToe() {   
        var node = document.createElement("li");
        var sNaam = document.getElementById("myNewName").value;
        var textnode = document.createTextNode(sNaam);
        node.appendChild(textnode);            
    document.getElementById("myList").appendChild(node);
}
    
function myFilterFunction() {
    var sSearchWord = document.getElementById("myFilterBox").value;
    console.log(sSearchWord);
}

function myFilterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myFilterBox");        
    filter = input.value.toUpperCase();
 
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName('li');
   
        
    for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerHTML;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
 li[i].style.display = "none";

    }
  }
}

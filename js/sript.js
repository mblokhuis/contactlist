function voegIemandToe() { 
  
        var node = document.createElement("li");
        
        document.getElementById("myList").appendChild(node);
        var div1 = document.createElement("DIV");
        div1.className="card";
        node.appendChild(div1);
        var div2 = document.createElement("DIV");
        div2.className="card-body";
        div1.appendChild(div2);
        var hNode = document.createElement("H4");
        hNode.className="card-title";
        var sNaam = document.getElementById("myNewName").value;
        hNode.innerText=sNaam;
        div2.appendChild(hNode);
        var pNode = document.createElement("P");
        pNode.className="card-text";
        pNode.innerText="Some quick example text to build on the card title and make up the bulk of the card's content.";
        div2.appendChild(pNode);
        var aNode = document.createElement("A");
        aNode.className="btn btn-primary";
        aNode.href="#!";
        aNode.innerText="More Info";
        pNode.appendChild(aNode);
        
                   
    
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

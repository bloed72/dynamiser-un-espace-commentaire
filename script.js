let form = document.getElementById("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
   
    
    let firstName = document.getElementById ("first-name");
    let lastName = document.getElementById("last-name");
    let comment = document.getElementById("message");
    let errorMsg = document.getElementById("error-message");
    let erreur;

    
    if (!firstName.value) {
       erreur = errorMsg.innerHTML;
    }
    if (!lastName.value) {
       erreur = errorMsg.innerHTML;
    }
    if (!comment.value) {
        erreur = errorMsg.innerHTML;
    }

    if (erreur) {
        errorMsg.style.display='block';
        return false;
    } else {
        errorMsg.style.display='none';
    }

    let list = document.getElementById("comment-list");
    let newCom = list.children[2].cloneNode(true);
    let userName = newCom.querySelector("h3");

    userName.innerText=firstName.value + " " + lastName.value;

    let newMsg = newCom.querySelector("p");

    newMsg.innerText = comment.value;

    list.appendChild(newCom);

    form.reset();
})
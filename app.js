attachButtons();

function attachButtons() {
    let buttons = document.getElementsByClassName('btn');
    buttons = [...buttons];
    
    
    buttons.forEach((singleButton) => {
        singleButton.addEventListener('click',handleButtonClick);
    });
}

function handleButtonClick(e) {
   const method = e.currentTarget.innerText;
    if (method === "GET") {
        handleGet();
    } else if (method === "POST") {
        handlePost();
    } else if (method === "HEAD"){
          handleHead();
    } else if(method === "DELETE"){
          handleDelete();
    } else{
        console.log("Kad sam poso Cveto ");
        
    } 
}

function handleGet() {
    const proba = new XMLHttpRequest();
    proba.onreadystatechange = function() {
        if(proba.readyState === 4 && proba.status === 200) {
            renderData(proba.responseText);
        }
    }
    proba.open("GET","http://localhost:3000/posts");
    proba.send();
}

function handlePost() {
    const proba = new XMLHttpRequest();
    proba.onreadystatechange = function() {
        if(proba.readyState === 4) {
            renderStatus(proba.responseText, proba.status);
        }
    }
    proba.open("POST"," http://localhost:3000/posts");
    const newData = {
        "title": "novi podatak",
        "author": "Djurov ajax"
    }
    proba.send(newData);
}

function handleHead(url, callback) {
    const proba = new XMLHttpRequest();
    proba.open("HEAD", "http://localhost:3000/posts");
    proba.onreadystatechange = function() {
        if (proba.readyState == 4) {
            console.log(proba.getAllResponseHeaders());
        }
    };
    proba.send();
}

function handleDelete(){
    const proba = new XMLHttpRequest();
    proba.onreadystatechange = function() {
        if(proba.readyState === 4 && proba.status === 200) {
            // renderData(proba.responseText);
        }
    }
    proba.open("DELETE"," http://localhost:3000/posts");
    proba.send();
}




function renderData(data) {
    console.log(data);
    
}

function renderStatus(statusText,statusCode){
     console.log(statusText);
     
}
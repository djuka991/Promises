let buttons = document.getElementsByClassName('btn');
buttons = [...buttons];

buttons.forEach((singlebutton) => {
      singlebutton.addEventListener("click",handleButtonClick);
});

function handleButtonClick(e){
     const method = e.currentTarget.getAttribute('data-method');
      switch(method) {
          case "GET" : handleGet();
          break;
          case "POST" : handlePost();
          break;
          case "HEAD" : handleHead();
          break;
          case "DELETE" : handleDelete();
          break;
          default:
              console.log("MRS");
              
      }
     

}



//GET
function handleGet(){
    const getMethod = new Promise((resolove, reject) => {
        const zahtev = new XMLHttpRequest();
        zahtev.open('GET', 'http://localhost:3000/posts');
        zahtev.onreadystatechange = () => {
            if(zahtev.readyState === 4){
                if(zahtev.status === 200){
                    resolove(zahtev.responseText);
                }else{
                    reject(zahtev.responseText);
                }
            } 
        }
        zahtev.send();
    });

    getMethod.then((results) => {
        // console.log(results);
        // console.log(typeof results);
        // results = JSON.parse(results);
        console.log(results);
        // console.log(typeof results);
      

    }).catch((errorMsg) => {
        console.log(errorMsg);
    });
}
//POST
function handlePost() {
    const postMethod = new Promise((resolove, reject) => {
        const zahtev = new XMLHttpRequest();
        zahtev.open('POST', 'http://localhost:3000/posts');
        zahtev.onreadystatechange = () => {
            if(zahtev.readyState === 4){
                if(zahtev.status === 200){
                    resolove(zahtev.responseText);
                }else{
                    reject(zahtev.responseText);
                }
            } 
        }
        zahtev.send();
    });

    postMethod.then((results) => {
    console.log(results);

    }).catch((errorMsg) => {
    console.log(errorMsg);
    });
}
//HEAD
function handleHead() {
    const headMethod = new Promise((resolove, reject) => {
        const zahtev = new XMLHttpRequest();
        zahtev.open('HEAD', 'http://localhost:3000/posts');
        zahtev.onreadystatechange = () => {
            if(zahtev.readyState === 4){
                if(zahtev.status === 200){
                    resolove(zahtev.getAllResponseHeaders());
                }else{
                    reject(zahtev.getAllResponseHeaders());
                }
            } 
        }
        zahtev.send();
    });

    headMethod.then((results) => {
    console.log(results);

    }).catch((errorMsg) => {
    console.log(errorMsg);
    });
}

//DELETE

function handleDelete() {
    const headMethod = new Promise((resolove, reject) => {
        const zahtev = new XMLHttpRequest();
        zahtev.open('DELETE', 'http://localhost:3000/posts');
        zahtev.onreadystatechange = () => {
            if(zahtev.readyState === 4){
                if(zahtev.status === 200){
                   
                }else{
                    
                }
            } 
        }
        zahtev.send();
    });

    headMethod.then((results) => {
    console.log(results);

    }).catch((errorMsg) => {
    console.log(errorMsg);
    });
}




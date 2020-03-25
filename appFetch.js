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
function handleGet() {
    fetch("http://localhost:3000/posts",{
        method : "GET"
      
    }).then((res) => {return res.json()}).then((r) => {
        console.log(r)
    });
}
//POST
function handlePost() {
    fetch("http://localhost:3000/profile",{
        method : "POST",
        headers: {
        "Content-type" : 'aplication/json'
        },
        body:{
          name: "cacao"
        }
    }).then(response => console.log(response));
}
// HEAD
function handleHead() {
    fetch("http://localhost:3000/posts",{
        method : "HEAD",
        headers: {

        }
    }).then(response => console.log(response));
}
//DELETE
function handleDelete() {
    fetch("http://localhost:3000/posts",{
        method : "DELETE",
        headers: {

        },
        body:{
            
        }
    }).then(response => console.log(response));

    
}
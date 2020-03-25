//element
$('.btn').on('click', handleClick);
//helper functions

function getData() {
    $.ajax({
        url: 'http://localhost:3000/user',
        type: 'GET',
        success: function(data){
             
               $(data).each(function(index,item){
                    $('.container__cards-ul').append('<li>' + item.firstName + '  ' + item.lastName + ' </li>');
                    // $('.container__cards-ul').append(` <li> ${item.firstName}  '  '  ${item.lastName} +  </li>`);

               })
               $('.container__cards').toggleClass('hidden');
               
           }
          })
  }




// function getData() {
//     $.get('http://localhost:3000/posts', function(data){
//          console.log(data);
         
//     })
// }

// function postData(){
//     $.post('http://localhost:3000/posts', function(data){
//         console.log(data);
        
//     })
// }

// function deleteData() {
//     $.ajax({
//         url     : 'http://localhost:3000/posts',
//         type    : 'DELETE',
//         success : function (result) {
//           return result;
            
//         }
//     });
// }
 
function handleClick(e) {
    const method = e.currentTarget.innerText;
    
     
    if(method === 'GET'){
       
        getData();
    } else if(method === 'POST'){
        postData();
    
        
    } else if(method === 'DELETE'){
        deleteData();
       
        
    }
   
}

 



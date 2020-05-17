'use strict'

let arr =[
    {
        name: 'Tati',
        lastName: 'Pabón',
        phone: '333 333 3333'

    },
    {
        name: 'Esneider',
        lastName: 'Barrera',
        phone: '444 444 4444'

    },
    {
        name: 'Gsus',
        lastName: 'Sanchez',
        phone: '555 555 5555'

    }
]



document.getElementById('names').addEventListener("change", (e)=>{
    console.log (e.target.value)
        let value = e.target.value;
    
        let name = document.querySelector("#name");
        let lastName = document.querySelector("#lastName");
        let phone = document.querySelector("#phone");
    
        
        if ((value === "1")){
            name.value = arr[0].name
            lastName.value = arr[0].lastName
            phone.value = arr[0].phone
    
        }else if(value === "2"){
            name.value = arr[1].name
            lastName.value = arr[1].lastName
            phone.value = arr[1].phone    
           
        }else {
            name.value = arr[2].name
            lastName.value = arr[2].lastName
            phone.value = arr[2].phone    
           
        }
    
        
})
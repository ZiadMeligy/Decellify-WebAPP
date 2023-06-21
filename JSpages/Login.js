const { createClient } = supabase;
const _supabase = createClient(
  "https://lgcfabpmajhnathcxigs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnY2ZhYnBtYWpobmF0aGN4aWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4Njk0NTczOCwiZXhwIjoyMDAyNTIxNzM4fQ.pYO9NYIAQw5NdxuhuQeE66frXqr1TFrRmC-aV51ljSA"
);
let usernameExport

let UsersPromise = new Promise(async (resolve, reject) => {
    let { data: retrievedUsers } = await _supabase
      .from("Users")
      .select("*");
    resolve(retrievedUsers);
  });




  let form = document.querySelector("form")
  let username= document.getElementById("username")
  let password = document.getElementById("password")
  let signinbtn = document.getElementById("submit-btn")
  
  form.addEventListener("submit", (e)=>{
    UsersPromise.then((data)=>{  
    console.log(data[1].Username)
    e.preventDefault();
    let usernameValue=username.value;
    let passworValue=password.value;
    usernameExport=usernameValue
    
    for(let i=0;i<data.length;i++){
        if((usernameValue==data[i].Username) && (passworValue==data[i].Password) ){

            sessionStorage.setItem('usernameName',usernameValue)

            
            Redirect()
            return
        }
        
    }
    showError(username,"Incorrect Credentials")
    showError(password,"Incorrect Credentials")
    checkRequired([username,password])


  })
})

function Redirect(){
    location.href='index-Logged.html'
}


function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input);
        }
    });
}
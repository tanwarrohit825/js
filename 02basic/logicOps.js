//&& --AND oprater both are true

// || - OR optration one side to de true

let isVeerify = true
let isLoged= false
let hasPayment= true
let isGuest = true

if(isVeerify && isLoged&&hasPayment){
  console.log('Loged true')    
} else if(isVeerify || isGuest){
    console.log('All free preview')
}else{
    console.log(help)
}








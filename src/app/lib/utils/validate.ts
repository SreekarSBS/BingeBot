export const validateData = (email : string , password : string  ) => {
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
let errorMessage1 = "" , errorMessage2 = "";

if(!isEmailValid) errorMessage1 += "valid Email Id "
if(!isPasswordValid) errorMessage2 += " ,valid Password"
return "Please enter a "+ errorMessage1 +  errorMessage2; 
}

export const validateEmail = (email : string ) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    if(!isEmailValid) return "Please enter a valid Email Id"
    else return ""
    
    }
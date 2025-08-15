const validate = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return "Invalid email format";
    }
    if(!isPasswordValid) return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
    return null
}

export default validate
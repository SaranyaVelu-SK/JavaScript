const generatePassword = (passwordLength,includesLowerCase,includesUpperCase,includesNumbers,includesSymbols) =>{
  let allowedChars ="";
  let password ="";

    const lowerCaseChars ="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="0123456789";
    const symbols="!@#$%^&*()_+-=<>?/~";
  allowedChars += includesLowerCase ? lowerCaseChars:"";
  allowedChars += includesUpperCase ? upperCaseChars:"";
  allowedChars += includesNumbers ? numbers:"";
  allowedChars += includesSymbols ? symbols:"";


  if(passwordLength<2){
    return `(password length must be greater than 1)`
  }else if(allowedChars.length === 0){
    return `select atleast 1 set to generate a password`
  }else{
    for(let i=0;i<passwordLength;i++){
        let randonIndex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randonIndex]
    }
  }

  return password;
}


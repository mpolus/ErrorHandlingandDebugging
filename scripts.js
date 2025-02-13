class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = 'ValidationError';
    }
}

function validateUsername(username) {
    if (username.length < 10) {
        throw new ValidationError("Username must be 10 characters long.");
    }
    return "Username is Valid.";
}

try{
    console.log(validateUsername("tomato"));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}
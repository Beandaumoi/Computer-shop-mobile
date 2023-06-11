//Validate Email
export const isValidGmail = (stringGmail) => (/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i.test(stringGmail))
//Validate Password
export const isValidPassword = (stringPassword) => stringPassword.length >= 5
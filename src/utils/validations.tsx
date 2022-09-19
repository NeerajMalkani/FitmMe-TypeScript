export const ValidateEmail = (email:string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export const ValidateMobile = (mobile:string) => {
  const reg = /^[0]?[789]\d{9}$/;
  return reg.test(mobile);
};

export const ValidatePassword = (password:string) => {
    const reg = /((?=.*[a-z])(?=.*[0-9])(?=.{6,}))/;
    return reg.test(password);
};

export const MatchPasswords = (password:string, confirmPassword:string) => {
  return password === confirmPassword;
};

export const ValidateFullName = (fullname:string) => {
  return fullname;
};

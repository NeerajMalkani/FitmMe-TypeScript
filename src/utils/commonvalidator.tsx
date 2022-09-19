import { MatchPasswords, ValidateEmail, ValidateFullName, ValidateMobile, ValidatePassword } from "./validations";

interface Fields{
  type:string
  value:string
  value2?:string
}
export const CommonValidator = (fieldsToValidate:Fields[]) => {
  let arrInvalidFields:string[] = [];
  fieldsToValidate.map((k) => {
    if (k) {
      switch (k.type) {
        case "email":
          if (!ValidateEmail(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "mobile":
          if (!ValidateMobile(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "password":
          if (!ValidatePassword(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "matchpassword":
          if (!MatchPasswords(k.value, k.value2 ? k.value2 : "")) {
            arrInvalidFields.push(k.type);
          }
          break;
        case "fullname":
          if (!ValidateFullName(k.value)) {
            arrInvalidFields.push(k.type);
          }
          break;
      }
    }
  });
  return arrInvalidFields;
};

export const APP_NAME =process.env.processPUBLIC_NEXT_APP_NAME || "FreshStock";
export const APP_DESCRIPTION = process.env.PUBLIC_NEXT_APP_DESCRIPTION || "a modern ecommerce app";

export const APP_URL= process.env .PUBLIC_APP_URL || 'http://localhost:8000/api/products';

export const signInDefaultValue = {
  email: "",
  password: "",
};

export const signUpDefaultValue = {
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
};
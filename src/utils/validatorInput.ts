// simple validate data input
export const validateLoginInput = (email: string, password: string) => {
  const errors: { [key: string]: any } = {};

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }

  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  // valid is true | false
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

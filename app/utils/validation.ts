export const idValidate = (id: string) => {
  const regex = /^(?=.*\d)[a-zA-Z0-9]{8,14}$/;
  return regex.test(id);
};

export const pwValidate = (pw: string) => {
  const regex = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,14}$/;
  return regex.test(pw);
};

export const emailVaildate = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return regex.test(email);
};

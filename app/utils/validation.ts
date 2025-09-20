export const idValidate = (id: string) => {
  const regex = /^[a-zA-z0-9]{8,14}&/;
  return regex.test(id);
};

export const pwValidate = (pw: string) => {
  const regex = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,14}$/;
  return regex.test(pw);
};

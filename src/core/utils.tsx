export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'O email não pode estar em branco.';
  if (!re.test(email)) return 'Ooops! Esse não é um endereço de email valido.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'A senha não pode estar em branco.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'O nome não pode estar em branco.';

  return '';
};

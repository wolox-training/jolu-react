import i18next from 'i18next';

i18next.addResources('es', 'SignUp', {
  name: 'Nombre',
  lastName: 'Apellido',
  email: 'Email',
  password: 'Contraseña',
  passwordConfirm: 'Confirmación de Contraseña',
  signUp: 'Sign Up',
  login: 'Login',
  field: 'Este campo es obligatorio'
});

i18next.addResources('en', 'SignUp', {
  name: 'Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
  passwordConfirm: 'Password Confirmation',
  signUp: 'Sign Up',
  login: 'Login',
  field: 'This field is required'
});

export default i18next;

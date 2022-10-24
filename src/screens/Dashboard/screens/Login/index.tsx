import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { LoginResponse, User } from 'utils/types';
import Container from 'components/Container';
import Language from 'components/lenguage';
import MessageUser from 'components/MessageUser';
import { login } from 'services/usersService';

import styles from './styles.module.scss';
/* eslint-disable @typescript-eslint/naming-convention */
function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const minPassword = 6;
  const maxPassword = 16;
  /* eslint-disable-next-line @typescript-eslint/no-empty-function */
  const defaultValues = {
    email: '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function  */
    first_name: '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function  */
    last_name: '',
    password: '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function  */
    password_confirmation: ''
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email()
      .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/),
    password: Yup.string().required().min(minPassword).max(maxPassword)
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(validationSchema)
  });

  const { mutate, isLoading, isSuccess, isError, error } = useMutation((user: LoginResponse) => login(user), {
    onSuccess: () => {
      navigate('/home');
    },
    onError: (err: any) => {
      if (!err?.errors) {
        toast.error(t('Services:genericError'));
      }
    }
  });

  const onSubmit = (user: User) => {
    mutate(user);
  };
  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.label}>{t('SignUp:email')}</label>
          <input {...register('email')} className={styles.input} />
          {errors.email && <span>{t('SignUp:field')}</span>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:password')}</label>
          <input {...register('password')} className={styles.input} type="password" />
          {errors.password && <span>{t('SignUp:field')}</span>}
        </div>

        <button type="submit" className={styles.buttonLogin}>
          {isLoading ? 'Loading...' : ' '} {t('SignUp:Login')}
        </button>
        <div className={styles.dividingLine} />
        <Link to="sign_up">
          <button type="submit" className={styles.buttonSingUp}>
            {t('SignUp:Sing Up')}
          </button>
        </Link>
      </form>
      <Language />
      {isError && error?.errors && <MessageUser type="error" messages={error.errors} />}
      {isSuccess && <MessageUser type="success" messages={[t('Login:successMessage')]} />}
    </Container>
  );
}

export default Login;

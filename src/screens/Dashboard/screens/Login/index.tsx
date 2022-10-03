import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Container from 'components/Container';
import Language from 'components/lenguage';
import { User } from 'utils/types';
import MessageUser from 'components/MessageUser';
import { login } from 'services/usersService';

import styles from './styles.module.scss';

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const minPassword = 8;
  const maxPassword = 16;
  const defaultValues = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
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

  const { mutate, isLoading, isSuccess, isError, error } = useMutation((user: User) => login(user), {
    onSuccess: (res) => {
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
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:password')}</label>
          <input {...register('password')} className={styles.input} type="password" />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit" className={styles.buttonSingUp}>
          {t('SignUp:Sing Up')} loading={isLoading}
        </button>
        <div className={styles.dividingLine} />
        <button type="submit" className={styles.buttonLogin}>
          {t('SignUp:Login')}
        </button>
      </form>
      <Language />
      {isError && error?.errors && <MessageUser type="error" messages={error.errors} />}
      {isSuccess && <MessageUser type="success" messages={[t('Login:successMessage')]} />}
    </Container>
  );
}

export default Login;

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

import Container from 'components/Container';
import Language from 'components/lenguage';
import { User } from 'utils/types';
import MessageUser from 'components/MessageUser';
import { registerService } from 'services/usersService';

import styles from './styles.module.scss';
/* eslint-disable @typescript-eslint/naming-convention */
function SignUp() {
  const { t, i18n } = useTranslation();
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
    email: Yup.string().required().email(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    password: Yup.string().required().min(minPassword).max(maxPassword),
    password_confirmation: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null])
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

  const { mutate, isSuccess, isError, error } = useMutation((user: User) => registerService(user), {
    onSuccess: () => {
      navigate('/');
    },

    onError: (err: any) => {
      if (!err?.errors) {
        toast.error(t('Response:Error'));
      }
    }
  });
  const onSubmit = (user: User) => {
    user.locale = i18n?.language;
    mutate(user);
  };
  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.label}>{t('SignUp:name')}</label>
          <input {...register('first_name')} className={styles.input} />
          {errors?.first_name && <p>{errors.first_name.message}</p>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:lastName')}</label>
          <input {...register('last_name')} className={styles.input} />
          {errors.last_name && <span>{t('SignUp:field')}</span>}
        </div>
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
        <div>
          <label className={styles.label}>{t('SignUp:passwordConfirm')}</label>
          <input {...register('password_confirmation')} className={styles.input} type="password" />
          {errors.password_confirmation && <span>{t('SignUp:field')}</span>}
        </div>
        <button type="submit" className={styles.buttonSingUp}>
          {t('SignUp:Sing Up')}
        </button>
        <div className={styles.dividingLine} />
        <Link to="/">
          <button type="submit" className={styles.buttonLogin}>
            {t('SignUp:Login')}
          </button>
        </Link>
      </form>
      <Language />
      {isError && error?.errors && <MessageUser type="error" messages={error.errors} />}
      {isSuccess && <MessageUser type="success" messages={[t('Login:successMessage')]} />}
    </Container>
  );
}

export default SignUp;

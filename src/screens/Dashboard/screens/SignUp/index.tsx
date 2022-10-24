import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Container from 'components/Container';
import Language from 'components/lenguage';
import { DataRegister } from 'utils/types';
import { registerService } from 'services/usersService';

import styles from './styles.module.scss';

function SignUp() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm<DataRegister>();

  const onSubmit: SubmitHandler<DataRegister> = (data) =>
    registerService(data).then((response) => console.log(response));

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label className={styles.label}>{t('SignUp:name')}</label>
          <input {...register('first_name')} className={styles.input} />
          {errors?.first_name && <p>{errors.first_name.message}</p>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:lastName')}</label>
          <input {...register('last_name')} className={styles.input} />
          {errors.last_name && <span>This field is required</span>}
        </div>
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
        <div>
          <label className={styles.label}>{t('SignUp:passwordConfirm')}</label>
          <input {...register('password_confirmation')} className={styles.input} type="password" />
          {errors.password_confirmation && <span>This field is required</span>}
        </div>
        <button type="submit" className={styles.buttonSingUp}>
          {t('SignUp:Sing Up')}
        </button>
        <div className={styles.dividingLine} />
        <button type="submit" className={styles.buttonLogin}>
          {t('SignUp:Login')}
        </button>
      </form>
      <Language />
    </Container>
  );
}

export default SignUp;

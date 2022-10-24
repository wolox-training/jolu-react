import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Container from 'components/Container';
import Language from 'components/lenguage';

import styles from './styles.module.scss';

type Inputs = {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(JSON.stringify(data, null, 2));

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label className={styles.label}>{t('SignUp:name')}</label>
          <input {...register('firstName')} className={styles.input} />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:lastName')}</label>
          <input {...register('lastName')} className={styles.input} />
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:email')}</label>
          <input {...register('mail')} className={styles.input} />
          {errors.mail && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:password')}</label>
          <input {...register('password')} className={styles.input} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>{t('SignUp:passwordConfirm')}</label>
          <input {...register('confirmPassword')} className={styles.input} />
          {errors.confirmPassword && <span>This field is required</span>}
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

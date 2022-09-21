import { useForm, SubmitHandler } from 'react-hook-form';

import Container from 'components/Container';

import styles from './styles.module.scss';

type Inputs = {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  confirmPassword: string;
};

function SignUp() {
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
          <label className={styles.label}>Nombre </label>
          <input {...register('firstName')} className={styles.input} />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label className={styles.label}>Apellido </label>
          <input {...register('lastName')} className={styles.input} />
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>Email </label>
          <input {...register('mail')} className={styles.input} />
          {errors.mail && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>Password</label>
          <input {...register('password')} className={styles.input} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <label className={styles.label}>Confirmacion de Password</label>
          <input {...register('confirmPassword')} className={styles.input} />
          {errors.confirmPassword && <span>This field is required</span>}
        </div>
        <button type="submit" className={styles.buttonSingUp}>
          Sing Up
        </button>
      </form>
      <button type="submit" className={styles.buttonLogin}>
        Login
      </button>
    </Container>
  );
}

export default SignUp;

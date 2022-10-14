import { useQuery } from '@tanstack/react-query';

import { getBook } from 'services/bookService';

import styles from './styles.module.scss';

function BookList() {
  const { isSuccess, data }: any = useQuery(['bookList'], () => getBook());

  return (
    <div className={styles.list}>
      {isSuccess &&
        /* eslint-disable @typescript-eslint/naming-convention */
        data.page.map(({ id, title, author, image_url }: any) => (
          <div className={styles.book} key={id}>
            <img src={image_url} className={styles.cover} alt="BookList:logoAlt" />
            <p className={styles.title}>{title}</p>
            <span className={styles.author}>{author}</span>
          </div>
        ))}
    </div>
  );
}

export default BookList;

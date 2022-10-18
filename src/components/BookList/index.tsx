import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { getBook } from 'services/bookService';

import styles from './styles.module.scss';

function BookList() {
  const { isSuccess, data }: any = useQuery(['bookList'], () => getBook());

  return (
    <div className={styles.list}>
      {isSuccess &&
        data.page?.map(({ id, title, author, image_url }: any) => (
          <Link to={`/books/${id}`}>
            <div className={styles.book} key={id}>
              <img src={image_url} className={styles.cover} alt="" />
              <p className={styles.title}>{title}</p>
              <span className={styles.author}>{author}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BookList;

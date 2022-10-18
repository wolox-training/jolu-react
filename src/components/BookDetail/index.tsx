import { useQuery } from '@tanstack/react-query';

import badge from '../../screens/Dashboard/screens/assets/badge.png';
import { useParams } from 'react-router';

import { bookDetail } from 'services/bookService';

import styles from './styles.module.scss';
/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/naming-convention */
function BookDetail() {
    const { id } = useParams();
    const { isSuccess, data }: any = useQuery(['detailList'], () => bookDetail(id));
    return (
        <section className={styles.container}>
            {isSuccess &&
                <div className={styles.book}>
                    <div className={styles.image}>
                        <img src={data.image_url} className={styles.cover} alt={data.title} />
                        <img src={badge} className={styles.badge} alt={('badge')} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>{data.title}</h2>
                            <h2 className={styles.subhead}>{data.genre}</h2>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.property}>{'Autor: '}:</p>
                            <p className={styles.value}>{data.author}</p>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.property}>{'Editorial: '}:</p>
                            <p className={styles.value}>{data.editor}</p>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.property}>{'Año de publicación: '}:</p>
                            <p className={styles.value}>{data.year}</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}

export default BookDetail;

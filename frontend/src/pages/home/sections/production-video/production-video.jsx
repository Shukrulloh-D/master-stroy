import { Container } from '@/shared/ui/container/container';
import { useSection } from '@/shared/api/queries';
import { Loader } from '@/shared/ui/loader/loader';
import styles from './production-video.module.css';

export function ProductionVideo() {
  const { data: features, isLoading } = useSection('productionFeatures');
  if (isLoading) return <Loader />;

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>О производстве</h2>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img src="/logo.png" alt="Мастер Строй" className={styles.logoImg} />
            {features?.map(f => (
              <div key={f.id} className={styles.feature}>
                <img src={f.icon} alt={f.title} className={styles.icon} />
                <div>
                  <div className={styles.fTitle}>{f.title}</div>
                  <div className={styles.fText}>{f.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.videoWrap}>
            <div className={styles.placeholder}>
               <div className={styles.playBtn}>
                  <div style={{width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '18px solid #fff', marginLeft: '6px'}}></div>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

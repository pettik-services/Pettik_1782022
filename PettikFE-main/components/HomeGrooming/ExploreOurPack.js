import Image from "next/image";
import styles from "./HomeGrooming.module.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ExploreOurPack = ({ data }) => {
  return (
    <div>
      <div className={styles.tabContent}>
        <div className={styles.tabContentDetails}>
          <div className={styles.image}>
            <Image
              src={data.img}
              layout="responsive"
              alt="dog grooming at home service"
            />
          </div>
          <div className={styles.exploreContent}>
            <p className={styles.priceNote}>*Prices may varies as per breed</p>
            <div className={styles.titlePlan}>
              <div className={styles.title}>{data.packName}</div>
              <div className={styles.priceContent}>
                <span className={styles.priceRupee}>
                  <span className={styles.price}>₹{data.price}</span>
                </span>
                <span className={styles.small}><AccessTimeIcon />{data.time}mins </span>
              </div>
            </div>
            <div className={styles.text}>
              <span className={styles.d_color}>What's Included</span>
              {data.include.map(item =><p>{item}</p>)}
            </div>
            <div className={styles.planDescription}>
              <div className={styles.planDescriptionContent}>
                <p>
                 {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreOurPack;

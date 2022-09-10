import Image from "next/image";
import styles from "./Blog.module.scss";
import DogAllergies from "../../public/groomingImages/Dog Allergies Know All About Them.jpg";
import DrySkin from "../../public/groomingImages/Here How You Can Prevent Dry Skin In Dogs.jpg";
import TickAndFleas from "../../public/groomingImages/Your Guide To Ticks & Fleas in Pets Symptoms, Treatment Care.jpg";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div className={styles.blogContent}>
        <div className={styles.blogHeading}>All Articles</div>
        <div className={styles.articleContent}>
        <Link href="blog-details">
        <div className={styles.healthImage}>
            <div className={styles.postImage}>
              <Image
                className={styles.imgResponsive}
                src={DogAllergies}
                alt="Dog Allergies - Know All About Them! "
                layout="responsive"
              />
            </div>
            <div className={styles.healthText}>
              <h3 className={styles.mpPostTitle}>
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
            </div>
          </div>
        </Link>
          
          <div className={styles.healthImage}>
            <div className={styles.postImage}>
              <Image
                className={styles.imgResponsive}
                src={DrySkin}
                alt="Here's How You Can Prevent Dry Skin In Dogs"
                layout="responsive"
              />
            </div>
            <div className={styles.healthText}>
              <h3 className={styles.mpPostTitle}>
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
            </div>
          </div>
          <div className={styles.healthImage}>
            <div className={styles.postImage}>
              <Image
                className={styles.imgResponsive}
                src={TickAndFleas}
                alt="Your Guide To Ticks &amp; Fleas in Pets: Symptoms, Treatment, Care"
                layout="responsive"
              />
            </div>
            <div className={styles.healthText}>
              <h3 className={styles.mpPostTitle}>
                The Do’s And Don'ts Of Grooming Your Dog At Home
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import styles from "./AddPet.module.scss";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import petImage from "../../public/addpet.jpg";

const AddPet = () => {
  return (
    <div>
      <div className={styles.addPetContent}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <div className={styles.addPetContentBox}>
              <div className={styles.addPetContentBoxheading}>Add New Pet</div>
              <div className={styles.addPetContentBoxCategories}>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    TYPE
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text" placeholder="DOG | CAT"></input>
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    GENDER
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <div className={styles.addPetContentBoxCategoriesBoxGender}>
                      <input className={styles.gender1} type="text"></input>
                      <input className={styles.gender2} type="text"></input>
                    </div>
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    BREED
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text"></input>
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    DOB
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text"></input>
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    AGE
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                  <div className={styles.addPetContentBoxCategoriesBoxGender}>
                      <input className={styles.gender1} type="text"></input>
                      <input className={styles.gender2} type="text"></input>
                    </div>
                  </div>
                </div>
                <div className={styles.addPetContentBoxSubCategories}>
                  <div className={styles.addPetContentBoxCategoriesName}>
                    NAME
                  </div>
                  <div className={styles.addPetContentBoxCategoriesBox}>
                    <input type="text"></input>
                  </div>
                </div>
              </div>
              <div className={styles.addPetContentBoxAddPetButtonConent}>
              <div className={styles.addPetContentBoxAddPetButton}>
              <Link href="/dashboard">
                   ADD PET
                   </Link>
                  </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.addPetImage}>
              <Image src={petImage} width="1119" height="588" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddPet;

import styles from "./Dashboard.module.scss";
import Image from "next/image";
import DogIcon from "../../public/DOGICON.png";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import Link from "next/link";

const Dashboard = () => {
  const petList = [
    {
      name: "Mishi",
      category: "Shitz Tzu",
      age: "0 Years and 11 Month",
      image: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
      _id: "v4sLtEcMpzabRyfx",
    },
    {
      name: "Nishi",
      category: "Phitz Pzu",
      age: "1 Years and 1 Month",
      image: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
      _id: "v5sLtEcMpzabRyfy",
    },
    {
      name: "lishi",
      category: "Phitz Pzu",
      age: "1 Years and 1 Month",
      image: "https://cdn-icons-png.flaticon.com/512/620/620851.png",
      _id: "v6sLtEcMpzabRyfz",
    }
  ];

  return (
    <div>
      <div className={styles.dashboardContainer}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={styles.userProfileContainer}>
            <Link href="/account-information">
              <div className={styles.editProfile}>
                <EditIcon />
              </div>
              </Link>
              <div className={styles.userProfiledetails}>
                <div className={styles.yourProfile}>Your Profile</div>
                <div className={styles.yourProfileDetails}>Dinesh Kapri</div>
                <div className={styles.yourProfileDetails}>+91-9971161976</div>
                <div className={styles.yourProfileDetails}>
                  kapridinesh99@gmail.com
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={styles.managePetContainer}>
              <div className={styles.managePetContainerHeading}>
                <div className={styles.ManagePets}>Manage Pets</div>
                <div className={styles.ManageAddPets}>
                  <div>Add Pets&nbsp;&nbsp;&nbsp;</div> <AddIcon />
                </div>
              </div>
              <div className={styles.petDetailsContainer}>
                <Grid container spacing={2} padding="1rem">
                { petList.map((data)=>(
                  <Grid item xs={12} md={6} lg={6} key={data._id}>
                    <Card
                      sx={{ maxWidth: 350, height: 280, background: "#F5F5F5" }}
                    >
                      <div className={styles.petDetailsCard}>
                        <div className={styles.petDetailsIconHeading}>
                          <div className={styles.petDetailsIcon}>
                            <Image src={DogIcon} width="100" height="100" />
                          </div>
                          <div className={styles.petDetailsHeading}>
                            <div className={styles.petDetailsName}>{data.name}</div>
                            <div className={styles.petDetailsTypeAge}>
                              Shitz Tzu
                            </div>
                            <div className={styles.petDetailsTypeAge}>
                              0 Years and 11 Months
                            </div>
                          </div>
                        </div>
                        <div className={styles.petDetailsDottedLine}></div>
                        <div className={styles.petDetailsEditDeleteDate}>
                          <div className={styles.petDetailsEditDelete}>
                            <div className={styles.petDetailsEdit}>Edit</div>
                            <div className={styles.petDetailsDelete}>
                              Delete
                            </div>
                          </div>
                          <div className={styles.petDetailsDate}>
                            21 - August - 2022
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                ))
                  
                }
                 
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;

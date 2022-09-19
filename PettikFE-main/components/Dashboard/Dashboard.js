import styles from "./Dashboard.module.scss";
import Image from "next/image";
import DogIcon from "../../public/DOGICON.png";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import Link from "next/link";
import {useState,useEffect} from "react";
import AccountInformation from "../AccountInformation/AccountInformation";

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
    },
  ];
  const [userData, setUserData] = useState({});
  const [isEditProfile, setIsEditProfile] = useState(false);
  useEffect(() => {
    // api cal to fetch user data
    // fetchUserData()
    setUserData({
      name: "Dinesh Kapri",
      email: "kapridinesh99@gmail.com",
      phoneNumber: "9971161976",
    });
  }, []);
  return (
    <>
   {!isEditProfile?<div>
    <div className={styles.dashboardContainer}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={styles.userProfileContainer}>
            {/* <Link href="/account-information"> */}
              <div className={styles.editProfile} onClick={()=>{
                setIsEditProfile(true)
              }}>
                <EditIcon />
              </div>
            {/* </Link> */}
            <div className={styles.userProfiledetails}>
              <div className={styles.yourProfile}>Your Profile</div>
              <div className={styles.yourProfileDetails}>{userData?.name}</div>
              <div className={styles.yourProfileDetails}>+91 {userData?.phoneNumber}</div>
              <div className={styles.yourProfileDetails}>{userData?.email}</div>
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.managePetContainer}>
            <div className={styles.managePetContainerHeading}>
              <div className={styles.ManagePets}>Manage Pets</div>
              <Link href="/add-newpet">
                <div className={styles.ManageAddPets}>
                  <div>Add Pets&nbsp;&nbsp;&nbsp;</div> <AddIcon />
                </div>
              </Link>
            </div>
            <div className={styles.petDetailsContainer}>
              <Grid container spacing={2} padding="1rem">
                {petList.map((data) => (
                  <Grid item xs={12} md={4} lg={4} key={data._id}>
                    <Card sx={{ maxWidth: 350, background: "#F5F5F5" }}>
                      <div className={styles.petDetailsCard}>
                        <div className={styles.petDetailsIconHeading}>
                          <div className={styles.petDetailsIcon}>
                            <Image src={DogIcon} width="50" height="50" />
                          </div>
                          <div className={styles.petDetailsHeading}>
                            <div className={styles.petDetailsName}>
                              {data.name}
                            </div>
                            <div className={styles.petDetailsTypeAge}>
                              Shitz Tzu
                            </div>
                            <div className={styles.petDetailsTypeAge}>
                              0 Years and 11 Months
                            </div>
                          </div>
                        </div>
                        {/* <div className={styles.petDetailsDottedLine}></div>
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
                      </div> */}
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>:(<AccountInformation userData={userData} setIsEditProfile={setIsEditProfile}/>)}
  </>
  );
};

export default Dashboard;

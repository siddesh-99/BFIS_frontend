// // import React, { useState } from 'react';
// // import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
// // import { useDispatch, useSelector } from 'react-redux';
// // import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
// // import { useNavigate } from 'react-router-dom'
// // import { authLogout } from '../../redux/userRelated/userSlice';
// // import { Button, Collapse } from '@mui/material';

// import { useSelector } from 'react-redux';

// const AdminProfile = () => {
//     // const [showTab, setShowTab] = useState(false);
//     // const buttonText = showTab ? 'Cancel' : 'Edit profile';

//     // const navigate = useNavigate()
//     // const dispatch = useDispatch();
//         const { currentUser } = useSelector((state) => state.user);
//     // const { currentUser, response, error } = useSelector((state) => state.user);
//     // const address = "Admin"

//     // if (response) { console.log(response) }
//     // else if (error) { console.log(error) }

//     // const [name, setName] = useState(currentUser.name);
//     // const [email, setEmail] = useState(currentUser.email);
//     // const [password, setPassword] = useState("");
//     // const [schoolName, setSchoolName] = useState(currentUser.schoolName);

//     // const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

//     // const submitHandler = (event) => {
//     //     event.preventDefault()
//     //     dispatch(updateUser(fields, currentUser._id, address))
//     // }

//     // const deleteHandler = () => {
//     //     try {
//     //         dispatch(deleteUser(currentUser._id, "Students"));
//     //         dispatch(deleteUser(currentUser._id, address));
//     //         dispatch(authLogout());
//     //         navigate('/');
//     //     } catch (error) {
//     //         console.error(error);
//     //     }
//     // }

//     return (
//         <div>
//             Name: {currentUser.name}
//             <br />
//             Email: {currentUser.email}
//             <br />
//             School: {currentUser.schoolName}
//             <br />
//             {/* <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button> */}
//             {/* <Button variant="contained" sx={styles.showButton}
//                 onClick={() => setShowTab(!showTab)}>
//                 {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
//             </Button>
//             <Collapse in={showTab} timeout="auto" unmountOnExit>
//                 <div className="register">
//                     <form className="registerForm" onSubmit={submitHandler}>
//                         <span className="registerTitle">Edit Details</span>
//                         <label>Name</label>
//                         <input className="registerInput" type="text" placeholder="Enter your name..."
//                             value={name}
//                             onChange={(event) => setName(event.target.value)}
//                             autoComplete="name" required />

//                         <label>School</label>
//                         <input className="registerInput" type="text" placeholder="Enter your school name..."
//                             value={schoolName}
//                             onChange={(event) => setSchoolName(event.target.value)}
//                             autoComplete="name" required />

//                         <label>Email</label>
//                         <input className="registerInput" type="email" placeholder="Enter your email..."
//                             value={email}
//                             onChange={(event) => setEmail(event.target.value)}
//                             autoComplete="email" required />

//                         <label>Password</label>
//                         <input className="registerInput" type="password" placeholder="Enter your password..."
//                             value={password}
//                             onChange={(event) => setPassword(event.target.value)}
//                             autoComplete="new-password" />

//                         <button className="registerButton" type="submit" >Update</button>
//                     </form>
//                 </div>
//             </Collapse> */}
//         </div>
//     )
// }

// export default AdminProfile

// // const styles = {
// //     attendanceButton: {
// //         backgroundColor: "#270843",
// //         "&:hover": {
// //             backgroundColor: "#3f1068",
// //         }
// //     }
// // }


import React from "react";
import { useSelector } from "react-redux";
import { Typography, Button, Collapse, TextField, Box } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const AdminProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div style={styles.container}>
      <Box sx={styles.profileContainer}>
        <Typography variant="body1">
       
          <Box >
          <Box sx={styles.ImageContainer}>
                profile Image:
            </Box>
            <br/>
            <Box sx={styles.InternalprofileContainer}>
              Name: {currentUser.name}
            </Box>
            <br />
            <Box sx={styles.InternalprofileContainer}>
              Email: {currentUser.email}
            </Box>
            <br />
            <Box sx={styles.InternalprofileContainer}>
              School: {currentUser.schoolName}
            </Box>
          </Box>
        </Typography>

        {/* Add your button and form here */}
      </Box>
    </div>
  );
};

export default AdminProfile;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px", 
    margin: "auto",
  },
  profileContainer: {
    backgroundColor: "#2196f3",
    marginTop: "100px",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  InternalprofileContainer: {
    backgroundColor: "#89CFF0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  ImageContainer:{
    backgroundColor: "#89CFF0",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth:"50%",
    margin: "auto", 
    
  },
  button: {
    marginTop: "20px",
  },
  form: {
    marginTop: "20px",
  },
};

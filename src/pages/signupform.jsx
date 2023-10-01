  import React from 'react';
  import {Card,CardHeader,CardContent,CardActions
    ,Container,TextField,Button,Link,
    Avatar,Checkbox,FormControlLabel,Grid
  } from "@mui/material";
  import {useNavigate} from "react-router-dom";
  import {Box} from "@mui/system";
  import LoginIcon from '@mui/icons-material/Login';
  import * as Yup from "yup";
  import { Formik, Field, Form, ErrorMessage } from 'formik';

  const SignupForm =()=>{
    const navigate = useNavigate();
    return(
      <Formik
      initialValues={{ username: '', email: '', password: '', confirmPassword: ''}}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be at least 8 characters')
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    {({ isSubmitting, errors, touched }) => (
      <Container component="main" maxWidth="lg" sx={{mt:5}}>
        <Box sx={{
          marginTop: 3,
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}>

          <Card>
            <CardHeader 
              sx={{flexDirection:"column"}}
              title={"Sign Up for a new account"}/>
            <CardContent sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
        }}>
            <Avatar sx={{m:1 , bgcolor: 'primary.main'  }}>
            <LoginIcon/>
            </Avatar>
            <Form sx={{ mt: 2 }}>
              <Field
                as={TextField}
                error={errors.username && touched.username}
                helperText={touched.username && errors.username}
                id="username"
                fullWidth
                label = "User Name"
                name = "username"
              />
              <Field
                as={TextField}
                error={errors.email && touched.email}
                helperText={touched.email && errors.email}
                sx={{ mt: 2 }}
                fullWidth
                label = "Email"
                name = "email"
              />
              <Field
                as={TextField}
                error={errors.password && touched.password}
                helperText={touched.password && errors.password}
                sx={{ mt: 2 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                />
              <Field
                as={TextField}
                error={errors.confirmPassword && touched.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ mt: 2 }}
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="password"
                />
              <Button
              sx={{borderRadius: '10px'}}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              >
                Sign Up
              
              </Button>
              <Grid container>
              <Grid item xs marginTop={1}>
                  <Link 
                    component="button"
                    variant="body2"
                    onClick={()=>{ navigate("/user/signin"); }}>
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Form>
            </CardContent>
          </Card>
        </Box>
      </Container>
      )}
      </Formik>
    )
  }
  export default SignupForm;
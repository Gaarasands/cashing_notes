import React from 'react';
import {Card,CardHeader,CardContent,CardActions
  ,Container,TextField,Button,Link,
  Avatar,Checkbox,FormControlLabel,Grid
} from "@mui/material";
import {Box} from "@mui/system";
import LoginIcon from '@mui/icons-material/Login';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { auth } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import UserPage from './user/userPage'

const LoginForm =()=>{
  const navigate = useNavigate();
  const handleClick = async(data)=>{
    let status = await auth(data)
    if (status === 200){
      navigate('/user/home')
    }
  }     

  return(
    <Formik
    initialValues={{ username: '', password: ''}}
    validationSchema={Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    })}
    onSubmit={(values)=>{
      handleClick(values)
    }}
  >
  {({ errors, touched }) => (
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
            title={"Sign In to your account"}/>
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
            <FormControlLabel sx={{ mt: 2 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            sx={{borderRadius: '10px'}}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            >
              Sign In                                 
            </Button>
            <Grid container>
            <Grid item xs marginTop={1}>
                <Link 
                  component="button"
                  variant="body2"
                  onClick={() => {navigate('/user/signup')}}  
                  >
                  Dont Have account ? Be Subscriber
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
export default LoginForm;
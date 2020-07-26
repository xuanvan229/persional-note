import React, { useState, useEffect } from 'react';
// import {FaPhoenixFramework} from 'react-icons/md';
import { FiEye, FiEyeOff } from 'react-icons/fi';
// import logo from '../../../assets/images/logo.png'
// import logo from '../../../assets/i'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../../components/Input';
import { Redirect, Route, Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/images/logo.png';

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const submitLogin = ({ email, password }) => {
    props.sendLogin({ email, password }, toast);
  };
  // useEffect(() => {
  //   if (props.isLogin) {
  //     return <Redirect to="/dashboard" />;
  //   }
  // },[props.isLogin])
  if (props.isLogin) {
    return <Redirect to="/" />;
  }
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const ForgotPassword = () => {
    return (
      <Link className="text-primary" to="/forgot-password">
        Forgot password?
      </Link>
    );
  };
  const TogglePasswordComponent = () => {
    return (
      <>
        {showPassword ? (
          <FiEyeOff
            color="#bec8d4"
            className="cursor-pointer"
            onClick={toggleShowPassword}
          />
        ) : (
          <FiEye
            color="#bec8d4"
            className="cursor-pointer"
            onClick={toggleShowPassword}
          />
        )}
      </>
    );
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid!')
      .required('You need to enter email address!'),
    password: Yup.string().required('You need to enter your password!'),
  });
  return (
    <div className="flex w-screen h-screen">
      <ToastContainer />
      <div className="xl:w-3/4 md:w-7/12 md:block hidden login-bg w-full h-screen bg-top bg-no-repeat bg-cover"></div>
      <div className="xl:w-1/4 md:w-5/12 w-full flex flex-col bg-white">
        <div className="flex flex-1 justify-center flex-col items-center md:items-start w-10/12 p-8 mx-auto">
          <div className="w-full bg-white">
            <img className="w-16 h-16" src={logo} />
          </div>
          <Formik
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={(e) => {
              submitLogin(e);
            }}
            validationSchema={loginSchema}
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldError,
              /* and other goodies */
            }) => (
              <form className="flex flex-col w-full">
                <h1 className="font-flex font-semibold text-2xl mt-5 mb-5">
                  Sign In
                </h1>
                <Input
                  error={touched.email ? errors.email : ''}
                  name="email"
                  onBlur={handleBlur('email')}
                  onChange={(email) => {
                    handleChange('email')(email);
                    setFieldError('email', undefined);
                  }}
                  className="w-full outline-none"
                  placeholder="Enter email address"
                  label="Email Address"
                  type="text"
                />
                <Input
                  error={touched.password ? errors.password : ''}
                  name="password"
                  onChange={(password) => {
                    handleChange('password')(password);
                    setFieldError('password', undefined);
                  }}
                  onBlur={handleBlur('password')}
                  className="w-full outline-none mt-4"
                  placeholder="Enter your password"
                  ForgotPasswordComponent={ForgotPassword}
                  TogglePasswordComponent={TogglePasswordComponent}
                  label="Password"
                  type={!showPassword ? 'password' : 'text'}
                />
                <div className="mt-6 flex flex-row justify-between">
                  <button
                    type="submit"
                    className="rounded-sm bg-red-500 font-bold py-2 w-full text-white outline-none focus:outline-none "
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

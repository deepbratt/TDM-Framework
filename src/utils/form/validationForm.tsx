import * as yup from 'yup';
import { EnterdigitCode, enterEmail } from '../constants/en';



export const Fieldnames={
    firstName:"firstName",
    lastName:"lastName",
    email:"email",
    password:"password",
    confirmPassword:"confirmPassword",
    phone:"phone",
    code:"code",
}

export const loginEmailValidation = yup.object().shape({
  email: yup
      .string()
      .email("Please enter valid email")
      .required('Email is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
export const loginNumberValidation = yup.object().shape({
  phone: yup
  .string()
  .required('Phone number is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})


export const signUpValidationSchema = yup.object().shape({
  firstName: yup
      .string()
      .matches(/\w*[A-Z]\w*/,  "First name must have a capital letter")
      .required('First name is required'),
      lastName: yup
      .string()
      .matches(/\w*[A-Z]\w*/,  "Last name must have a capital letter")
      .required('Last name is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  })
  export const signUpNumberValidation = yup.object().shape({
    firstName: yup
        .string()
        .matches(/\w*[A-Z]\w*/,  "First name must have a capital letter")
        .required('First name is required'),
        lastName: yup
        .string()
        .matches(/\w*[A-Z]\w*/,  "Last name must have a capital letter")
        .required('Last name is required'),
      phone: yup
        .string()
        // .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
      password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
    })



  export const verificationValidationSchema = yup.object({
   
    email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
     
    })
    export const verificationNumberValidation = yup.object({
   
      phone: yup
      .string()
      .required('Phone number is required'),
       
      })
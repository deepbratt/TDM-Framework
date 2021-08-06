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
      .matches(/(.*[a-z]){3}/,  "At least 3 characters")
      .required('First name is required'),
      lastName: yup
      .string()
       .matches(/(.*[a-z]){3}/,  "At least 3 characters")
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
        .matches(/(.*[a-z]){3}/,  "At least 3 characters")
        .required('First name is required'),
        lastName: yup
        .string()
         .matches(/(.*[a-z]){3}/,  "At least 3 characters")
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
    
export const DropdownValidation = yup.object().shape({
  location: yup.string().required(),
  city: yup.string().required(),
  carModel: yup
  .string()
  .matches(/^[a-zA-Z].*/,"Must be letters")
  .required(),
  carMake: yup.string().required(),
  year: yup
  .string() 
  .matches(/^[0-9]{1,45}$/,'Must be in number')
  .required(),
  condition: yup.string().required(),
  registrationCity: yup.string().required(),
  bodycolor: yup.string().required(),
  bodyType: yup.string().required(),
  engineType: yup.string().required(),
  assembly: yup.string().required(),
  transmission: yup.string().required(),
  milage:yup
  .string() 
  .matches(/^[0-9]{1,45}$/,'Must be in number')
  .required("Milage is required"),
  priceRange: yup
  .string()
  .matches(/^[0-9]{1,45}$/,'Must be in number')
  .required("Price Range is required"),
  features: yup.string().required("Features is required"),
  description: yup.string().required("Description is required"),
});
import axiosInstance from "./Configs/axiosInstance";

export function sendEmailorPhone(emailorphone:any,type:any) {
    return axiosInstance
      .get(`Account/ForgotPassword?phoneOrEmail=${emailorphone}&RecoveryMehod=${type}`)
      .then((response) => response);
  }
  
  export function sendCodetoVerifyByEmail(email:any,code:any) {
      return axiosInstance
        .post(`Account/VerifyUserByCode`,{
            // phoneNumber: "string",
            email: email,
            code: code
        })
        .then((response) => response);
    }
  
    export function sendChangePassword(email:any,password:any) {
      return axiosInstance
        .post(`Account/ChangeUserPassword`,{
            email: email,
            newPassword: password
        })
        .then((response) => response);
    }
import axiosInstance from "./Configs/axiosInstance";

export function getAllPreAppointments() {
  return axiosInstance
    .get(`Appointment/getAllPreAppointments`)
    .then((response) => response);
}
export function getAllTodayAppointments() {
  return axiosInstance
    .get(`/Appointment/getAllTodayAppointments`)
    .then((response) => response);
}
export function getAllCustomers() {
  return axiosInstance
    .get(`/Customer/getAllCustomers`)
    .then((response) => response);
}

//پرداختی ها
// export function getAllCustomers() {
//   return axiosInstance
//     .get(`/Customer/getAllCustomers`)
//     .then((response) => response);
// }
export function addAppointment(data: any) {
  return axiosInstance
    .post(`/Appointment/addAppointment`, data)
    .then((response) => response);
}
export function editAppointment(data: any) {
  return axiosInstance
    .post(`/Appointment/editAppointment`, data)
    .then((response) => response);
}
export function GetFactorItems(data: any) {
  return axiosInstance
    .get(`/FactorItem/GetFactorItems?FactorID=${data}`)
    .then((response) => response);
}

// userInfo
export function getUserInfo() {
  return axiosInstance.get(`/Account/getUserInfo`).then((response) => response);
}
export function getAllServices() {
  return axiosInstance
    .get("/Service/getAllServices")
    .then((response) => response);
}
export function getFactorItemWithAllServices(data: any) {
  return axiosInstance
    .get(`/Factor/getFactorItemWithAllServices?FactorId=${data}`)
    .then((response) => response);
}
export function GetServiceGroup() {
  return axiosInstance
    .get(`ServiceGroup/GetServiceGroup`)
    .then((response) => response);
}
export function SearchService(data: any) {
  return axiosInstance
    .get(`/Service/SearchService?searchValue=${data}`)
    .then((response) => response);
}
export function getCustomerAppointments(data: any) {
  return axiosInstance
    .get(`/Appointment/getCustomerAppointments?CustomerId=${data}`)
    .then((response) => response);
}
export function editFactor(data: any) {
  return axiosInstance
    .post(`/Factor/editFactor`, data)
    .then((response) => response);
}

export function SearchCustomer(data: any) {
  return axiosInstance
    .get(`/Customer/SearchCustomer?searchValue=${data}&SearchTypeId=2`)
    .then((response) => response);
}
export function editCustomer(data: any) {
  return axiosInstance
    .post(`/Customer/editCustomer`, data)
    .then((response) => response);
}export function addCustomer(data: any) {
  return axiosInstance
    .post(`/Customer/addCustomer`, data)
    .then((response) => response);
}

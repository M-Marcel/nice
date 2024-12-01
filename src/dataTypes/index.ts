
export type WaitUser = {
    fullName:string
    email:string
}
export type User = {
    firstName:string
    lastName:string
    email:string
}
export type WaitListFormData = {
    fullName:string
    email:string
}

export type SignUpFormData = {
    firstName:string
    lastName:string
    email:string
}
export type LoginFormData = {
    email:string
    password:string
}

export type ForgotFormData = {
    email:string
}

export type ValidateFormData = {
    email:string
    otp:string
}
export type ResetPasswordFormData = {
    email:string
    newPassword:string
}
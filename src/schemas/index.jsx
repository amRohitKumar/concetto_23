import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    branch: Yup.string().min(2).max(25).required("Please enter your branch"),
    admission_number: Yup.string().min(2).max(8).required("Please enter your admission number")
})
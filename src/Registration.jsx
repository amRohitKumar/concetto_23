import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
    name: "",
    branch: "",
    admission_number: ""
}

const Registration = () => {
  
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit : (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })

  return (
    <>
        <div className="content-overlay">
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label><br></br>
                <input type="text" name="name" id="name" placeholder="Enter name" autoComplete="off" value={values.name} onChange={handleChange} onBlur={handleBlur}></input><br></br>
                {
                    (errors.name && touched.name ? 
                        <p>{errors.name}</p>
                        : null
                    )
                }
                <label htmlFor="branch">
                    Branch
                </label><br></br>
                <input type="text" name="branch" id="branch" placeholder="Enter branch" autoComplete="off" value={values.branch} onChange={handleChange} onBlur={handleBlur}></input><br></br>
                {
                    (errors.branch && touched.branch ? 
                        <p>{errors.branch}</p>
                        : null
                    )
                }
                <label htmlFor="admission_number">
                    Admission Number
                </label><br></br>
                <input type="text" name="admission_number" id="admission_number" placeholder="Enter admission number" autoComplete="off" value={values.admission_number} onChange={handleChange} onBlur={handleBlur}></input>
                {
                    (errors.admission_number && touched.admission_number ? 
                        <p>{errors.admission_number}</p>
                        : null
                    )
                }
                <br></br>
                <button type="submit">Submit</button>
            </form> */}
            <img src="./download (1).jpeg"></img>
        </div>
    </>
  );
};

export default Registration;
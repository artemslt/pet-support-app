import { Field,ErrorMessage  } from 'formik';

export const SecondPart =({setStep, values})=>{
    return(
        <div>
            <div role="group">
            <label>
              <Field type="radio" name="sex" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="sex" value="Female" />
              Female
            </label>

            </div>
        {/* <Field type="checkbox" name="male" value="Male" checked/>
        <Field type="checkbox" name="female" value="Female"/> */}

        <ErrorMessage  name="sex" component="div" />

        <Field name="location" placeholder="Type location"/>
        <ErrorMessage  name="location" component="div" />

        
        <Field name="price" placeholder="Type price"/>
        <ErrorMessage  name="price" component="div" />

        <Field name="img" />
        <ErrorMessage  name="img" component="div" />


        <Field name="comment" placeholder="Type comment"/>
        <ErrorMessage  name="comment" component="div" />

        <button type="button" onClick={()=>setStep(true)}>
                Back
              </button>
              <button type="submit">Done</button>
      </div>
    )
}
import { withFormik } from 'formik'
import Yup from 'yup'

import Form from '../components/Form'

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    tel: '',
    message: '',
    hearAboutUs: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email address'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'ContactForm',
})(Form)

export default EnhancedForm

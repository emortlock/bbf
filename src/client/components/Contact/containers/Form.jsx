import { withFormik } from 'formik'
import Yup from 'yup'

import Form from '../components/Form'

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    company: '',
    email: '',
    tel: '',
    message: '',
    hearAboutUs: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name'),
    company: Yup.string()
      .required('Please enter your company')
      .notRequired(),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email address'),
    tel: Yup.string()
      .min(11, 'Please enter a valid telephone number')
      .max(19, 'Please enter a valid telephone number')
      .notRequired(),
    message: Yup.string()
      .required('Please enter the message you want to send'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    fetch('/api/quote', { method: 'post', body: JSON.stringify(values) })
      .then(() => {
        setSubmitting(false)
      })
  },
  displayName: 'ContactForm',
})(Form)

export default EnhancedForm

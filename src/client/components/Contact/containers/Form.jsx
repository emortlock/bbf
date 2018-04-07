import { withFormik } from 'formik'
import Yup from 'yup'

import Form from '../components/Form'

import { FIELDS } from '../constants'

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    [FIELDS.NAME]: '',
    [FIELDS.COMPANY]: '',
    [FIELDS.EMAIL]: '',
    [FIELDS.TELEPHONE]: '',
    [FIELDS.MESSAGE]: '',
    [FIELDS.HEAR_ABOUT_US]: '',
  }),
  validationSchema: Yup.object().shape({
    [FIELDS.NAME]: Yup.string()
      .required('Please enter your name'),
    [FIELDS.COMPANY]: Yup.string()
      .required('Please enter your company')
      .notRequired(),
    [FIELDS.EMAIL]: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email address'),
    [FIELDS.TELEPHONE]: Yup.string()
      .min(11, 'Please enter a valid telephone number')
      .max(19, 'Please enter a valid telephone number')
      .notRequired(),
    [FIELDS.MESSAGE]: Yup.string()
      .required('Please enter the message you want to send'),
  }),
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    fetch('/api/quote', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setStatus('submitted')
        setSubmitting(false)
      })
  },
  onReset: (values, { setStatus }) => {
    setStatus('init')
  },
  displayName: 'ContactForm',
})(Form)

export default EnhancedForm

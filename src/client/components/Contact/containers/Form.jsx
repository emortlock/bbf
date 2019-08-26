import { compose, withHandlers, lifecycle } from 'recompose'
import { withFormik } from 'formik'
import Yup from 'yup'

import Form from '../components/Form'

import { FIELDS, STATUS } from '../constants'

let scrollToComponent
let containerEl

const EnhancedForm = compose(
  withFormik({
    mapPropsToValues: () => ({
      [FIELDS.NAME]: '',
      [FIELDS.COMPANY]: '',
      [FIELDS.EMAIL]: '',
      [FIELDS.TELEPHONE]: '',
      [FIELDS.MESSAGE]: '',
      [FIELDS.HEAR_ABOUT_US]: '',
    }),
    validationSchema: Yup.object().shape({
      [FIELDS.NAME]: Yup.string().required('Please enter your name'),
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
      [FIELDS.MESSAGE]: Yup.string().required(
        'Please enter the message you want to send',
      ),
    }),
    handleSubmit: (values, { setSubmitting, setStatus }) => {
      // Disabled for demo purposes
      // fetch('/api/quote', {
      //   method: 'post',
      //   body: JSON.stringify(values),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }).then(() => {
      //   setStatus(STATUS.SUBMITTED)
      //   setSubmitting(false)
      // })

      return false
    },
    onReset: (values, { setStatus }) => {
      setStatus(STATUS.INIT)
    },
    displayName: 'ContactForm',
  }),
  withHandlers({
    onRef: () => el => {
      containerEl = el
    },
  }),
  lifecycle({
    componentDidMount() {
      import('react-scroll-to-component').then(module => {
        scrollToComponent = module
      })
    },
    componentDidUpdate() {
      if (this.props.status === STATUS.SUBMITTED) {
        scrollToComponent(containerEl)
      }
    },
  }),
)(Form)

export default EnhancedForm

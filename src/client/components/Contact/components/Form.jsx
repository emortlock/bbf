import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  SelectField,
  TextInputField,
  TextAreaField,
} from '../../Form'

const ContactForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit} noValidate>
    <fieldset>
      <legend>Contact Us</legend>

      <TextInputField
        name="name"
        label="Your name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={touched.name && errors.name}
      />

      <TextInputField
        name="email"
        label="Your email address"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={touched.email && errors.email}
      />

      <TextInputField
        name="tel"
        label="Your telephone number"
        type="tel"
        value={values.tel}
        onChange={handleChange}
        onBlur={handleBlur}
        required={false}
        error={touched.tel && errors.tel}
      />

      <TextAreaField
        name="message"
        label="Your message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={touched.message && errors.message}
      />

      <SelectField
        name="hearAboutUs"
        label="How did you hear about us?"
        value={values.hearAboutUs}
        onChange={handleChange}
        onBlur={handleBlur}
        required={false}
        error={touched.hearAboutUs && errors.hearAboutUs}
        options={[
          { label: 'Existing customer', value: 'existing' },
        ]}
      />
    </fieldset>

    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>

    <div>
      {JSON.stringify({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }, null, 2)}
    </div>
  </Form>
)

ContactForm.propTypes = {
  values: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ContactForm

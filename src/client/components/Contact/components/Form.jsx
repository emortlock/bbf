import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../Button'
import { H2 } from '../../Heading'
import Section from '../../Section'
import { Form, SelectField, TextInputField, TextAreaField } from '../../Form'

import { STATUS, FIELDS } from '../constants'

const readyToSubmit = (values, errors) =>
  values.name &&
  values.email &&
  values.message &&
  !(errors.name || errors.email || errors.message)

const ContactForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  resetForm,
  status,
  onRef,
}) => (
  <div ref={onRef}>
    {status !== STATUS.SUBMITTED ? (
      <Form onSubmit={handleSubmit} noValidate id="contactForm">
        <fieldset>
          <legend className="text-base mb-0">
            <H2 noDivider center>
              Request a Quote
            </H2>
          </legend>

          <div className="max-w-sm mx-auto">
            <TextInputField
              name={FIELDS.NAME}
              label="Your name"
              type="text"
              value={values[FIELDS.NAME]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              error={touched[FIELDS.NAME] && errors[FIELDS.NAME]}
            />

            <TextInputField
              name={FIELDS.COMPANY}
              label="Your company"
              type="text"
              value={values[FIELDS.COMPANY]}
              onChange={handleChange}
              onBlur={handleBlur}
              required={false}
              error={touched[FIELDS.COMPANY] && errors[FIELDS.COMPANY]}
            />

            <TextInputField
              name={FIELDS.EMAIL}
              label="Your email address"
              type="text"
              value={values[FIELDS.EMAIL]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              error={touched[FIELDS.EMAIL] && errors[FIELDS.EMAIL]}
            />

            <TextInputField
              name={FIELDS.TELEPHONE}
              label="Your telephone number"
              type="tel"
              value={values[FIELDS.TELEPHONE]}
              onChange={handleChange}
              onBlur={handleBlur}
              required={false}
              error={touched[FIELDS.TELEPHONE] && errors[FIELDS.TELEPHONE]}
            />

            <TextAreaField
              name={FIELDS.MESSAGE}
              label="Your message"
              value={values[FIELDS.MESSAGE]}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              error={touched[FIELDS.MESSAGE] && errors[FIELDS.MESSAGE]}
              rows={8}
            />

            <SelectField
              name={FIELDS.HEAR_ABOUT_US}
              label="How did you hear about us?"
              value={values[FIELDS.HEAR_ABOUT_US]}
              onChange={handleChange}
              onBlur={handleBlur}
              required={false}
              error={
                touched[FIELDS.HEAR_ABOUT_US] && errors[FIELDS.HEAR_ABOUT_US]
              }
              options={[
                { label: 'Existing customer', value: 'existing' },
                { label: 'Recommendation', value: 'recommended' },
                { label: 'Online search (e.g. Google)', value: 'search' },
                { label: 'Social network (e.g. LinkedIn)', value: 'social' },
                { label: 'Advertisement', value: 'advert' },
                { label: 'Other', value: 'other' },
              ]}
            />
          </div>
        </fieldset>

        <div className="max-w-sm mx-auto">
          <Button
            type="submit"
            disabled={isSubmitting || !readyToSubmit(values, errors)}
            primary
            fullWidth
          >
            Send
          </Button>
        </div>
      </Form>
    ) : (
      <Section>
        <H2 noDivider center>
          Get a Free No Obligation Quote Now
        </H2>
        <p>
          Thank you for getting in touch, one of our team will get back to you
          as soon as possible.
        </p>
        <Button primary onClick={resetForm}>
          Send another message
        </Button>
      </Section>
    )}
  </div>
)

ContactForm.propTypes = {
  values: PropTypes.shape({}).isRequired,
  touched: PropTypes.shape({}).isRequired,
  errors: PropTypes.shape({}).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  status: PropTypes.oneOf(
    Object.keys(STATUS).map(statusCode => STATUS[statusCode]),
  ),
  onRef: PropTypes.func,
}

ContactForm.defaultProps = {
  status: STATUS.INIT,
  onRef: undefined,
}

export default ContactForm

import PropTypes from 'prop-types'

const INPUT = 'input'
const SELECT = 'select'

const getInputPropTypes = element => {
  let propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: element === INPUT ? PropTypes.string : undefined,
    disabled: PropTypes.bool,
    placeholder:
      element === SELECT
        ? PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
        : PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    checked: element === INPUT ? PropTypes.bool : undefined,
    defaultChecked: element === INPUT ? PropTypes.bool : undefined,
    minLength: element === INPUT ? PropTypes.number : undefined,
    maxLength: element === INPUT ? PropTypes.number : undefined,
    min: element === INPUT ? PropTypes.number : undefined,
    max: element === INPUT ? PropTypes.number : undefined,
    step: element === INPUT ? PropTypes.number : undefined,
    autoComplete: element === INPUT ? PropTypes.string : undefined,
    autoCapitalize: element === INPUT ? PropTypes.string : undefined,
    required: PropTypes.bool,
    inputMode: element === INPUT ? PropTypes.string : undefined,
    pattern:
      element === INPUT
        ? PropTypes.oneOfType([PropTypes.instanceOf(RegExp), PropTypes.string])
        : undefined,
    readOnly: PropTypes.bool,
    spellCheck:
      element === INPUT ? PropTypes.oneOf(['default', true, false]) : undefined,
    tabIndex: PropTypes.number,
    className: PropTypes.string,
    invalid: PropTypes.bool,
    options:
      element === SELECT
        ? PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            }),
          ).isRequired
        : undefined,
  }

  propTypes = Object.keys((types, prop) => {
    const type = propTypes[prop]

    if (!type) return types

    return {
      ...types,
      [prop]: type,
    }
  }, {})

  return propTypes
}

const getInputDefaultProps = element => ({
  type: element === INPUT ? 'text' : undefined,
  disabled: false,
  placeholder: element === SELECT ? 'Please select' : undefined,
  readOnly: false,
})

export { getInputPropTypes, getInputDefaultProps }

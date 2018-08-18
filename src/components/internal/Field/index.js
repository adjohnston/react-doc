import React from 'react'
import PropTypes from 'prop-types'

const inputType = ({ type, value, prop, changeHandler }) => {
  switch (type) {
    case 'string':
      return <input type="text" onChange={changeHandler} value={value} />

    case 'number':
      return <input type="number" onChange={changeHandler} value={value} />

    case 'boolean':
      return (
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={value && 'checked'}
        />
      )

    default:
      return <div>function</div>
  }
}

const Field = ({ changeHandler, prop, type, value }) => {
  return (
    <label>
      <span>{prop}</span>
      {inputType({ prop, type, value, changeHandler })}
    </label>
  )
}

Field.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  prop: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.func,
  ]).isRequired,
}

export { Field }
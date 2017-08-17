import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import Prop from 'src/components/Prop'
import transformValue from 'src/helpers/transform-value'

const Props = ({state, setProp, props}) => {
  return (!!props & !!state && (
    <section
      className={`${classString('__section')} ${classString('__section--slim')}`}>
      <h2
        className={classString('__heading')}>
        Props
      </h2>

      <ul>
        {Object.keys(props).map(prop => (
          <Prop
            key={prop}
            name={prop}
            defs={props[prop]}
            value={transformValue(state[prop], props[prop].type)}
            onChange={setProp} />
        ))}
      </ul>
    </section>
  )) || null
}

Props.propTypes = {
  setProp: PropTypes.func.isRequired,
  state: PropTypes.object,
  props: PropTypes.object
}

export default Props

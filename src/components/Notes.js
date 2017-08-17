import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const Notes = ({notes}) => (!!notes && (
  <section
    className={`${classString('__section')} ${classString('__section--slim')}`}>
    <h2
      className={classString('__heading')}>
      Notes
    </h2>

    {Object.keys(notes).map(group => (
      <div
        key={group}>
        <h3
          className={classString('__heading')}>
          {group}
        </h3>
        <p
          className={classString('__p')}>
          {notes[group]}
        </p>
      </div>
    ))}
  </section>
)) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import jsxToString from 'jsx-to-string'
import Code from 'components/Code'
import Notes from 'components/Notes'
import Preview from 'components/Preview'
import Examples from 'components/Examples'
import Properties from 'components/Properties'
import { className } from 'helpers'
=======
import Notes from 'src/components/Notes'
import Description from 'src/components/Description'
import Status from 'src/components/Status'
import Preview from 'src/components/Preview'
import Examples from 'src/components/Examples'
import Props from 'src/components/Props'
import classString from 'src/helpers/class-string'
>>>>>>> ed6b7f7dc2751349ecc12a6c9ac13cf717059fc7

const Documenter = ({
  name,
  description,
  status,
  notes,
  props,
  examples,
  setExample,
  setProp,
  componentProps,
  swatches,
  children: Component
}) => (
  <section
    className={classString('__layout')}>
    <h1
      className={classString('__title')}>
      {name}
    </h1>

    <Status
      status={status} />

    <Description>
      {description}
    </Description>

    <section
      className={classString('__body')}>
      <Preview
        swatches={swatches}>
        {Component}
      </Preview>

      <Code
        jsx={jsxToString(Component)}
        html={renderToStaticMarkup(Component)} />

      <Examples
        setExample={setExample}
        examples={examples} />

      <Props
        state={componentProps}
        props={props}
        setProp={setProp} />

      <Notes
        notes={notes} />
    </section>
  </section>
)

Documenter.propTypes = {
  children: PropTypes.element.isRequired,
  setExample: PropTypes.func.isRequired,
  setProp: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired,
  props: PropTypes.object,
  swatches: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  description: PropTypes.node,
  notes: PropTypes.object,
  examples: PropTypes.object,
  status: PropTypes.oneOf([
    'DANGEROUS', 'WIP', 'READY'
  ])
}

export default Documenter

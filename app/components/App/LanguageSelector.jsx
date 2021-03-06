import React from 'react'
import { Map } from 'immutable'
import classNames from 'classnames'
import { withNamespaces } from 'react-i18next'

import { Icon } from '../Utils/Icon'


const defaultLocales = new Map({
  en: 'English',
  fr: 'Français'
})

@withNamespaces() // Force waiting for translations to be loaded
export default class LanguageSelector extends React.PureComponent {
  render() {
    const sizeClass = this.props.size ? `is-${this.props.size}` : null
    return (
      <div className={classNames('language-selector', this.props.className)}>
        {this.props.withIcon && <Icon name="language" size={this.props.size} />}
        <span className={classNames('select', sizeClass)}>
          {this.renderSelect()}
        </span>
      </div>
    )
  }

  renderSelect() {
    const options = defaultLocales
      .merge(this.props.additionalOptions || {})
      .sortBy((v, k) => k)

    return (
      <select
        onChange={e => this.props.handleChange(e.target.value)}
        value={this.props.value}
      >
        {this.renderLocalesMap(options)}
      </select>
    )
  }

  renderLocalesMap(localesMap) {
    return localesMap.entrySeq().map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ))
  }
}

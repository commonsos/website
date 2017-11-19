import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'
import {Down} from '../../icons'
import './style.scss'

class LanguageSwitcher extends Component {

  constructor (props) {
    super(props)
    this.handleDropdown = this.handleDropdown.bind(this)
    const { i18n } = this.props
    this.state = {
      language: i18n.language,
      active: false
    }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleDropdown () {
    this.setState({active: !this.state.active})
  }

  handleChangeLanguage (lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  renderLanguageChoice ({ code, label }) {
    const buttonClass = classNames('LanguageSwitcher__button', {
      'LanguageSwitcher__button--selected': this.state.language === code
    })
    return (
      <button
        key={code}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    )
  }

  render () {
    const languages = [
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'French' },
      { code: 'es', label: 'Spanish' },
      { code: 'cat', label: 'Catalan' },
      { code: 'it', label: 'Italian' }
    ]
    return (
      <div className='languages_container' onClick={() => this.handleDropdown()}>
        <div className="languageSwitcher">
          <div className="languageSwitcher_current">{this.state.language === 'en-US' ? 'English' : languages.filter(lang => this.state.language === lang.code)[0].label}</div>
          <div className={this.state.active ? "languageSwitcher_dropdown active" : "languageSwitcher_dropdown" }>
            {languages.map((language) => this.renderLanguageChoice(language))}
          </div>
          <span><Down width='18' heigth='18' color='#fff' /></span>
        </div>
      </div>
    )
  }
}

export default translate('LanguageSwitcher')(LanguageSwitcher)

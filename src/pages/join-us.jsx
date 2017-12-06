import React from 'react'
import Helmet from 'react-helmet'
import Markdown from 'react-remarkable'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import { translate } from 'react-i18next'

class JoinUsRoute extends React.Component {
  render () {
    const { t } = this.props
    const { title, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>{`${title}`}</title>
          <meta name="description" />
        </Helmet>
        <Header
          menu={menu}
          social={author}
        />
        <Intro image={'join'} title={'Join Us'} />
        <div className='page_body'>
          <Markdown source={t('joinus.content')} />
        </div>
        <Footer
          menu={menu}
          social={author}
        />
      </div>
    );
  }
}

export default translate('translations')(JoinUsRoute)

export const pageQuery = graphql`
query JoinUsQuery {
  site {
    siteMetadata {
      title
      subtitle
      copyright
      menu {
        label
        path
      }
      author {
        name
        email
        telegram
        twitter
        github
      }
    }
  }
}
`

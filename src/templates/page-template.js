import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageTemplateDetails from '../components/PageTemplateDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'

class PageTemplate extends React.Component {
  render () {
    const { title, subtitle, menu, author } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark

    let description
    if (page.frontmatter.description !== null) {
      description = page.frontmatter.description
    } else {
      description = subtitle
    }

    return (
      <div>
        <Helmet>
          <title>{`${page.frontmatter.title} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header
          menu={menu}
          social={author}
        />
        <PageTemplateDetails {...this.props} />
        <Footer
          menu={menu}
          social={author}
        />
      </div>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    markdownRemark: PropTypes.object.isRequired
  })
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`

//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import ScrollTop from '../common/scroll-top/index'

const containerStyle = {
  paddingTop: '0',
}

const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
  return <div style={containerStyle}>
    <main>
      { children }
      <ScrollTop />
    </main>
  </div>
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout

import { connect } from 'react-redux'
import Subscriber from '../../Subscriber'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const subscriber = new Subscriber({})
  return {
    subscriber
  }
}

export default connect(mapStateToProps)(Page)

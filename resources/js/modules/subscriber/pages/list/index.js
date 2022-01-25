// import libs
import { connect } from 'react-redux'
import Subscriber from '../../Subscriber'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.subscribers
  
  return {
    subscribers: data?.map((subscriber) => new Subscriber(subscriber)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)

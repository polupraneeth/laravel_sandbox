// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { subscriberListRequest, subscriberRemoveRequest } from '../../service'

// import components
import SubscriberRow from './components/SubscriberRow'
import Pagination from './components/Pagination'

class Page extends Component {
  static displayName = 'SubscribersPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    subscribers: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(subscriberListRequest({}))
  }

  pageChange = (pageNumber) => {
    this.props.dispatch(subscriberListRequest({ pageNumber }))
  }


  handleRemove = (id) => {
    this.props.dispatch(subscriberRemoveRequest(id))
  }

  renderSubscribers() {
    return this.props.subscribers.map((subscriber, index) => {
      return <SubscriberRow key={index}
                         subscriber={subscriber}
                         index={index}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return <main className="container mt-5 p-5 card-white" role="main">
      <h1>Subscribers</h1>
      <table className="table table-responsive table-striped">
        <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        { this.renderSubscribers() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page

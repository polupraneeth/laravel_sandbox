import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'SubscriberRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  subscriber: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const SubscriberRow = ({ index, subscriber, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{subscriber.name}</td>
    <td>{subscriber.email}</td>
    <td>{subscriber.phone}</td>
    <td>{subscriber.address}</td>
    <td>{subscriber.createdAt && subscriber.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{subscriber.updatedAt && subscriber.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`subscribers/${subscriber.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(subscriber.id)}>Delete</button>
      </div>
    </td>
  </tr>)
}

SubscriberRow.displayName = displayName
SubscriberRow.propTypes = propTypes

export default SubscriberRow
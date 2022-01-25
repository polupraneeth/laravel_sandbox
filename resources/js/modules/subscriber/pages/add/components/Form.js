import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'SubscriberFrom'
const propTypes = {
  subscriber: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ subscriber, errors, onChange, onSubmit }) => {
  
  function handleChange(name, value) {
    if (value !== subscriber[name]) {
      onChange(name, value)
    }
  }
  
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text"
               id="name"
               name="name"
               className={`form-control ${errors.has('name') && 'is-invalid'}`}
               placeholder="Name"
               value={subscriber.name || ''}
               onChange={e => handleChange(e.target.name, e.target.value)} />
        {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text"
                 id="email"
                 name="email"
                 className={`form-control ${errors.has('email') && 'is-invalid'}`}
                 placeholder="Email"
                 value={subscriber.email || ''}
                 onChange={e => handleChange(e.target.name, e.target.value)} />
          {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
        </div>
    </div>
    <div className="form-group row">
      <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
        <div className="col-sm-10">
          <input type="text"
                 id="phone"
                 name="phone"
                 className={`form-control ${errors.has('phone') && 'is-invalid'}`}
                 placeholder="Phone"
                 value={subscriber.phone || ''}
                 onChange={e => handleChange(e.target.name, e.target.value)} />
          {errors.has('phone') && <div className="invalid-feedback">{errors.first('phone')}</div>}
        </div>
    </div>
    <div className="form-group row">
      <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
        <div className="col-sm-10">
          <input type="text"
                 id="address"
                 name="address"
                 className={`form-control ${errors.has('address') && 'is-invalid'}`}
                 placeholder="Address"
                 value={subscriber.address || ''}
                 onChange={e => handleChange(e.target.name, e.target.value)} />
          {errors.has('address') && <div className="invalid-feedback">{errors.first('address')}</div>}
        </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form

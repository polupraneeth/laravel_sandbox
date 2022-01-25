// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { subscriberAddRequest } from '../../service'
import { Validator } from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'AddSubscriber'
  static propTypes = {
    subscriber: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new Validator({
      'name': 'required|min:3',
      'email': 'required|email|min:5',
      'phone': 'required|integer|min:10',
      'address': 'required|min:10',
    })
    
    const subscriber = this.props.subscriber.toJson()
    
    this.state = {
      subscriber,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const subscriber = nextProps.subscriber.toJson()
    
    if (!_.isEqual(this.state.subscriber, subscriber)) {
      this.setState({ subscriber })
    }
    
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
  
    this.setState({ subscriber: { ...this.state.subscriber, [name]: value} })
  
    errors.remove(name)
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const subscriber = this.state.subscriber
    const { errors } = this.validator
    
    this.validator.validateAll(subscriber)
      .then((success) => {
        if (success) {
          this.submit(subscriber)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(subscriber) {
    this.props.dispatch(subscriberAddRequest(subscriber))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
  
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
  
        this.setState({ errors })
      })
  }
  
  render() {
    return <div className="container mt-5 p-5 card-white">
      <h1 className="text-center">Create</h1>
      <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div>
  }
}

export default Page

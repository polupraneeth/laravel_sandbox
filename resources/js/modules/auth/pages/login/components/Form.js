import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Form = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  <form className="form-home" role="form" onSubmit={handleSubmit} noValidate>
      <div className="form-home-body">
          <div id="welcome-lines">
              <div className="w-line-1">Hi, Welcome</div>
              <div className="w-line-2">to my sandbox project</div>
          </div>
          <div id="form-input-area">
              <div className="filed-input-wrap">
                  <input type="text"
                         className={`filed-input ${errors.has('email') && 'is-invalid'}`}
                         name="email"
                         id="email"
                         placeholder="Email address"
                         value={email || ''}
                         onChange={e => handleChange(e.target.name, e.target.value)}
                         required
                         autoFocus/>
                  {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
              </div>
              <div className="filed-input-wrap">
                  <input type="password"
                         className={`filed-input ${errors.has('password') && 'is-invalid'}`}
                         id="password"
                         name="password"
                         placeholder="Password"
                         value={password || ''}
                         onChange={e => handleChange(e.target.name, e.target.value)}
                         required/>
                  {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
              </div>
              <div className="filed-input-wrap">
                  <input type="checkbox"
                         name="remember"
                         className="custom-control-input"
                         onChange={e => handleChange(e.target.name, !remember)}/>
              </div>
          </div>
          <div id="submit-button-cvr">
              <button id="submit-button"
                      type="submit"
                      disabled={errors.any()}>Sign In</button>
          </div>
      </div>
  </form>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form

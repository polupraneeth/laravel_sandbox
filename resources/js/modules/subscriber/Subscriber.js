import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Subscriber extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.slug = props.slug || ''
    this.name = props.name || ''
    this.email = props.email || ''
    this.phone = props.phone || ''
    this.address = props.address || ''
    this.published = props.published || false
    this.publishedAt = props.publishedAt ? moment(props.publishedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Subscriber

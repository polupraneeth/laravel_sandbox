import React from 'react'
import moment from "moment";

const Footer = () => (<footer className="sticky-bottom py-3">
    <div className="container">
        <p className="m-0 text-center text-white">Copyright © polupraneeth.me {moment().format('YYYY')}</p>
    </div>
</footer>)

export default Footer

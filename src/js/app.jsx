import React from 'react'
import ReactDOM from 'react-dom'

import styles from '../css/package.scss'

class Hello extends React.Component {
  render() {
    return <div className={styles.hello}>Hello React & {this.props.name}</div>
  }
}

ReactDOM.render(<Hello name='ELF' />, document.getElementById('root'))

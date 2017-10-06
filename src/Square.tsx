import * as React from 'react'

interface Props {
  value: number
}

export default class Square extends React.Component<Props> {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    )
  }
}

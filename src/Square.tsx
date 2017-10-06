import * as React from 'react'

interface Props {
  value: number
}

export default class Square extends React.Component<Props> {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

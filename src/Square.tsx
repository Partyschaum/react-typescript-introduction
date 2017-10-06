import * as React from 'react'

interface Props {
  value: number
}

interface State {
  value: string
}

export default class Square extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    )
  }
}

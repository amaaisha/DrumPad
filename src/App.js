import React from 'react'
import DrumPad, { data } from "./DrumPad";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      display: 'Little Drummer Boy\n play your drum.....'
    }
  }

  handleDisplay = display => this.setState({display})

  render() {
    return (
      <div id={'drum-machine'}>
        <div id={'display'}>
          {this.state.display}
        </div>
        <div id={'drum-pads'}>
           {data.map(d => (
             <DrumPad
               id={d.id}
               letter={d.letter}
               src={d.src}
               handleDisplay = {this.handleDisplay}

             />
           ))}
        </div>
      </div>
    )
  }
}

export default App
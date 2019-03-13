// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrateState = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  changeResolutionState = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
      {console.log(this.state)}
      <button className="bitrate" onClick={this.changeBitrateState}>button to  change bitrate</button>
      <button className="resolution" onClick={this.changeResolutionState}>button to change resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger

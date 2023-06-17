import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class DragDropComponent extends React.Component {

  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1,1]}
        bounds={{top:-150}}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}

export default DragDropComponent
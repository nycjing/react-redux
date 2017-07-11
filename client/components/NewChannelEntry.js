import React from 'react';
import {connect} from 'react-redux'
import store, { writeChannel, postChannel } from '../store';

function NewChannelEntry (props) {
    console.log('newChannelEntry-----',props.newChannelEntry)
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control"
          value={props.newChannelEntry}
          type="text"
          name="name"
          onChange={props.handleChange}
        placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/


const mapStateToProps = function (state) {
    return {
      newChannelEntry: state.newChannelEntry
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
   return{
     handleChange(event){
       dispatch(writeChannel(event.target.value))
     },
     handleSubmit(event){
       event.preventDefault()
       const channelName = event.target.name.value
         console.log('channelName----',channelName)
       dispatch(postChannel({name: channelName}));

     }
   }
}

const Container = connect(mapStateToProps,mapDispatchToProps )(NewChannelEntry)
export default Container

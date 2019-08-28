import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStreams } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        //console.log(formValues);
        this.props.editStreams(this.props.match.params.id, formValues);
    };
    render() {
        //console.log(this.props);
        if(!this.props.stream) {
            return <div>Loading....</div>
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                 //initialValues={{ title:'edit me hhhh', description: 'change this too' }}
                // initialValues={this.props.stream}
                initialValues={_.pick(this.props.stream, 'title','description')}
                 onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   // console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStreams})(StreamEdit);
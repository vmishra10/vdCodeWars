import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state =  { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchText('hello');
    }

    onSearchText = async searchText => {
        console.log(searchText);
        const response = await youtube.get('/search' ,{
            params: {
                q: searchText
            }
        });
        //console.log(response.data.items);
        this.setState({
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    onVideoSelect = (video) => {
        console.log('from tehe app',  video);
        this.setState({selectedVideo: video});
    }
    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit= {this.onSearchText} />
            <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    {this.state.selectedVideo &&
                        <VideoDetail video = {this.state.selectedVideo} />
                    }
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect = {this.onVideoSelect} videos= {this.state.videos} />
                </div>
                </div>
            </div>
        </div>
    );
    }
}

export default App;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';



const API_KEY = 'AIzaSyD8wE1uXQjBWT9rdadC0miZccPZIiYZqPU';

class App extends Component  {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'sufboards'}, (videos) => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

        });

    }


    render(){
        return(
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.state.selectedVideo}
                    videos = {this.state.videos}/>
            </div>
        );
    }

}

// take thid components generate HTML put it 
// on the page (in the dom)
ReactDOM.render(<App/>, document.querySelector('.container'));
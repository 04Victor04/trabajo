import React from 'react';
import youtube from "./youtube";
import BarraBusqueda from "./BarraBusqueda";
import ListaVideos from "./ListaVideos";
import VideoInformacion from "./VideoInformacion";

class Busqueda extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onSearchSubmit = async term => {
    const { data: { items: videos } } = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos, selectedVideo: videos[0] })
  }

  onSelectVideo = selectedVideo => {
    this.setState({ selectedVideo });
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <BarraBusqueda onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column" >
              {selectedVideo && <VideoInformacion video={selectedVideo} />}
            </div>
            <div className="five wide column" >
              <ListaVideos videos={videos} onVideoSelect={this.onSelectVideo} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Busqueda;

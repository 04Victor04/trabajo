import React from "react"

class BarraBusqueda extends React.Component {
  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <div class="w3-container w3-red">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Busqueda de videos</label>
            <img
              className="logo-image"
              alt="Girl in a jacket" width="300" height="100"
              src="https://i.blogs.es/15ccbe/baja-youtube/1366_521.jpg"
            />
            <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default BarraBusqueda;
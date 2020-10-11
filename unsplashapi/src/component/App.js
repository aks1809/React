import React from "react";
import unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageView from "./ImageView";

class App extends React.Component {
  state = { imagesArray: [] };
  onGetValue = async (query) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: query },
    });
    this.setState({ imagesArray: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onGetValue}></SearchBar>
        <ImageView imagesArray={this.state.imagesArray}></ImageView>
      </div>
    );
  }
}

export default App;

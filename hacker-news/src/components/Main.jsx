import React from "react";
import "./main.css";

import List from "./List";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.slice(0, 10),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return items.map((item, index) => {
      return <List key={index} id={item} data={index + 1} />;
    });
  }
}

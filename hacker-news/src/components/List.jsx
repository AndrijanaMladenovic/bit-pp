import React from "react";
import "./list.css";
import extractDomain from "extract-domain";
import {
  AiFillClockCircle,
  AiFillHeart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result,
            index: this.props.data,
          });
          console.log(result);
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
    const { error, isLoaded, item, time, index } = this.state;

    const date = (element) => {
      var startDate = new Date(element);

      var endDate = new Date();
      var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      const result = new Date(seconds * 1000).toISOString().slice(11, 19);
      return `${result} hours ago`;
    };

    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <>
          <div className="list">
            <div className="header">
              {" "}
              <span>{index}.</span>
              <p>{item.title}</p>
              <span>({extractDomain(item.url)})</span>
            </div>
            <div className="info">
              <p>
                <AiFillHeart />
                {item.score} points
              </p>

              <span>
                <BsFillPeopleFill />
                {item.by}
              </span>
              <p>
                <AiOutlineClockCircle />
                {date(item.time)}
              </p>
              <p className="comments">{item.descendants} comments</p>
            </div>
          </div>
        </>
      );
    }
  }
}

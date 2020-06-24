import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
class Slider extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block img"
              src="https://teluguwap.vip/wp-content/uploads/2020/03/Birds-of-Prey-Full-Movie-Download.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Birds of Prey 2020</h3>
              <p>Action,Adventure,Comedy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img" //teluguwap.vip/wp-content/uploads/2020/03/Birds-of-Prey-Full-Movie-Download.jpg
              src="https://i.ytimg.com/vi/gm65tIsjMa8/maxresdefault.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {" "}
              <h3>Bad Boys for Life 2020</h3>
              <p>Action , Comedy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img"
              src="https://pbs.twimg.com/media/EWGtiogUcAATa4f.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {" "}
              <h3>Onward 2020</h3>
              <p>Adventure,Animation,Comedy</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section>
          <Jumbotron className="jumbo">
            <div className="sign">
              <h1>Join Today</h1>
              <p>
                Get access to maintain your own custom personal lists, track
                what you've seen and search and filter for what to watch
                next—regardless if it's in theatres, on TV or available on
                popular streaming services like HBO Max, Netflix, Amazon Prime
                Video, and Disney Plus.
              </p>
              <p>
                <Button variant="warning">Sign up</Button>
              </p>
            </div>
          </Jumbotron>
        </section>
      </>
    );
  }
}

export default Slider;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardGroup, Section } from "react-bootstrap";

class Sections extends Component {
  state = {};
  render() {
    return (
      <>
        <CardGroup>
          <Card className="card" style={{ width: "30%", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.alistdaily.com/wp-content/uploads/2016/05/Netflix-1024x572.png"
            />
            <div className="card_full">
              <Card.Body className="card_body">
                <Card.Title className="card_title">Netflix</Card.Title>
                <Card.Text className="card_text">
                  Enjoy on your TV. Watch on Smart TVs, Playstation, Xbox,
                  Chromecast, Apple TV, Blu-ray players, and more.
                </Card.Text>
                <Button className="card_btn">Go</Button>
              </Card.Body>
            </div>
          </Card>
          {/* 2 */}
          <Card className="card_2" style={{ width: "30%", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/disney_plus_logo_2019.png"
            />
            <div className="card_full">
              <Card.Body className="card_body">
                <Card.Title className="card_title">Disney+</Card.Title>
                <Card.Text className="card_text">
                  Disney+ is the exclusive home for your favorite movies and TV
                  shows from Disney, Pixar, Marvel, Star Wars, and National
                  Geographic. Start streaming today.
                </Card.Text>
                <Button className="card_btn_2">Go</Button>
              </Card.Body>
            </div>
          </Card>
          {/* 3 */}
          <Card className="card_3" style={{ width: "30%", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn.mos.cms.futurecdn.net/aa2JE6ASMUXGZrLpvCc2Cj.jpg"
            />
            <div className="card_full">
              <Card.Body className="card_body">
                <Card.Title className="card_title">Prime Video</Card.Title>
                <Card.Text className="card_text">
                  Enjoy exclusive Amazon Originals as well as popular movies and
                  TV shows. Watch anytime, anywhere. Start your free trial.
                </Card.Text>
                <Button className="card_btn_3">Go</Button>
              </Card.Body>
            </div>
          </Card>
        </CardGroup>
        {/*  */}
      </>
    );
  }
}

export default Sections;

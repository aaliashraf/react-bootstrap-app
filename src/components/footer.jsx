import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FontAwesome from "react-fontawesome";

class Footers extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="footer">
          <div class="container-fluid padding">
            <div class="row text-center padding">
              <div class="col-md-4">
                <hr class="light" />
                <div class="col-xs-12">
                  <a href="#">
                    <img src="logo.png" width="50px" height="28px" />
                  </a>
                </div>
                <hr class="light" />
                <h3>Orange Flick</h3>
                <p>
                  <FontAwesome className="fab fa-facebook"></FontAwesome>
                  Facebook
                </p>
                <p>
                  <FontAwesome className="fab fa-twitter"></FontAwesome>Twitter
                </p>
                <p>
                  <FontAwesome className="far fa-envelope"></FontAwesome>Email
                </p>
              </div>

              <div class="col-md-4">
                <hr class="light" />
                <h4>The Basics</h4>
                <hr class="light" />
                <p>About Us</p>
                <p>Contact Us</p>
                <p>System Status</p>
              </div>

              <div class="col-md-4">
                <hr class="light" />
                <h4>Get Involved</h4>
                <hr class="light" />
                <p>Add New Movie</p>
                <p>Add New Tv Show</p>
                <p>3rd Party Application</p>
              </div>
              <div class="col-12">
                <hr class="light-1" />
                <a href="#">
                  <h5>&copy;Orangeflick.com</h5>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footers;

import React, {Component} from "react";
import {Jumbotron, Button} from 'reactstrap';
import { slide as Menu } from 'react-burger-menu';

class Box extends Component{

    render() {
        return(
            <div>
              <div id="outer-container">
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
                  <Menu>
                    <Jumbotron>
                      <h1 className="display-3">Hello, world!</h1>
                      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                      <hr className="my-2" />
                      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                      <p className="lead">
                      <Button color="danger">Learn More</Button>
                      </p>
                    </Jumbotron>
                    <a id="about" className="menu-item" href="">About</a>
                    <a id="contact" className="menu-item" href="">Contact</a>
                  </Menu>
                  <main id="page-wrap">
                    <Button>
                      <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                    </Button>
                  </main>
              </div>
            </div>
        )
    }
}

export default Box;

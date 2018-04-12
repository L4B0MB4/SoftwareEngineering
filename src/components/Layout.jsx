import React, { Component } from "react";
import { Container, Grid, Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

//Umschließendes Layout für jede einzelne Seite
class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ width: "100%" }}>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={1} computer={2} />
            <Grid.Column mobile={14} computer={12}>
              {this.props.children}
            </Grid.Column>
            <Grid.Column mobile={1} computer={2} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

//Header (auf jeder Seite gleich)
const Header = () => {
  return (
    <div>
      <Menu inverted fixed="top" size="huge">
        <Menu.Item>
          <img src="./logo.png" /> SemsaKrebsler
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Anlegen</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/listsupplier">Liste Lieferanten</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/listwine">Liste Weine</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Layout;

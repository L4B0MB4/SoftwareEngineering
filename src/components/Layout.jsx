import React, { Component } from "react";
import { Container, Grid, Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <Container style={{ width: "100%" }}>
        <Header activeItem={activeItem} />
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

const Header = props => {
  const { activeItem } = props;
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
          <Link to="/search">Suche</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/dialoge">Dialoge</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>Abmelden</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Layout;

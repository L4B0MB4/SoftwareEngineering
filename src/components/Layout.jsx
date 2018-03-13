import React, { Component } from "react";
import { Container, Grid, Menu, Input } from "semantic-ui-react";

class Layout extends Component {

    constructor(props)
    {
        super(props);
        this.state=
        {
            activeItem:"home"
        }
    }


  render() {
      const activeItem = this.state.activeItem;
    return (
      <Container style={{width:"100%"}}>
      <Header activeItem={activeItem}/>
      <br/>
      <br/>
      <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={1} computer={3} />
            <Grid.Column mobile={14} computer={10}>
              {this.props.children}
            </Grid.Column>
            <Grid.Column mobile={1} computer={3} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const Header = (props) => {
   const {activeItem} = props;
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item
          name="Hauptseite"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Weine"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Lieferant"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Layout;

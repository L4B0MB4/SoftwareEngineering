import React, { Component, Fragment } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown, Checkbox } from "semantic-ui-react";
import Layout from "./Layout";
import Wine from "./Wine";
import Supplier from "./Supplier";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "wine"
    };
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item name="Wein" active={this.state.active === "wine"} onClick={() => this.onClick("wine")} />
              <Menu.Item name="Lieferant" active={this.state.active === "supplier"} onClick={() => this.onClick("supplier")} />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Grid>
                    {this.state.active === "supplier" ? <Supplier /> : null}
                    {this.state.active === "wine" ? <Wine /> : null}
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }

  onClick = active => {
    this.setState({ active });
  };
}

export default Index;

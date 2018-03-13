import React, { Component } from "react";
import {Grid, Menu, Segment, Form, Button, Dropdown} from "semantic-ui-react"
import Layout from "./Layout";

class Index extends Component {
  render() {
      const wineOptions =[{text:"A"},{text:"B"},{text:"C"}]
    return (
      <Layout>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Wein"
                active={true}
              />
              <Menu.Item
                name="Kunde"
              />
              <Menu.Item
                name="Lieferant"
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
            <Form>
              <Form.Field>
                <label>Benutzername</label>
                <input placeholder="Benutzername" />
              </Form.Field>
              <Form.Field>
                <label>Benutzername</label>
                <input placeholder="Benutzername" />
              </Form.Field>
              <Form.Field>
                <label>Benutzername</label>
                <input placeholder="Benutzername" />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder="Wein auswählen" fluid selection options={wineOptions} />
              </Form.Field>
              <Form.Field>
                <label>Benutzername</label>
                <input placeholder="Benutzername" />
              </Form.Field>
            </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Index;

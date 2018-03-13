import React, { Component } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown } from "semantic-ui-react";
import Layout from "./Layout";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "kunde"
    };
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Kunde"
                active={this.state.active === "kunde"}
                onClick={() => this.onClick("kunde")}
              />
              <Menu.Item
                name="Wein"
                active={this.state.active === "wein"}
                onClick={() => this.onClick("wein")}
              />
              <Menu.Item
                name="Lieferant"
                active={this.state.active === "lieferant"}
                onClick={() => this.onClick("lieferant")}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12} >
          {this.state.active === "kunde" ? Kunde() : null}
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

const Kunde = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} stretched>
          {PersonalDaten()}
        </Grid.Column>
        <Grid.Column width={8} stretched>
          {AdressDaten()}
          {WeinDaten()}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12} />
        <Grid.Column width={4}>
          <Button primary style={{ width: "100%" }}>
            {" "}
            Anlegen{" "}
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const PersonalDaten = () => {
  const anrede = [{ text: "Herr" }, { text: "Frau" }];
  return (
    <Segment>
      <h2> Personaldaten </h2>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label>Vorname</label>
          <input placeholder="Vorname" />
        </Form.Field>
        <Form.Group>
          <Form.Field width={6}>
            <label>Anrede</label>
            <Dropdown
              placeholder="Anrede auswählen"
              fluid
              selection
              options={anrede}
            />
          </Form.Field>
          <Form.Field width={10}>
            <label>Alter</label>
            <input placeholder="Alter" type="number" />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field width={6}>
            <label>Tel. Vorwahl</label>
            <input placeholder="Vorwahl" />
          </Form.Field>
          <Form.Field width={10}>
            <label>Telefonnummer</label>
            <input placeholder="Telefonnummer" />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </Form.Field>
      </Form>
    </Segment>
  );
};

const AdressDaten = () => {
  return (
    <Segment>
      <h2> Adressdaten </h2>
      <Form>
        <Form.Group>
          <Form.Field width={6}>
            <label>PLZ</label>
            <input placeholder="PLZ" type="number" />
          </Form.Field>
          <Form.Field width={10}>
            <label>Ort</label>
            <input placeholder="Ort" />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Straße und Hausnummer</label>
          <input placeholder="Vorwahl" />
        </Form.Field>
      </Form>
    </Segment>
  );
};

const WeinDaten = () => {
  const anrede = [{ text: "Wein A" }, { text: "Wein B" }];
  return (
    <Segment>
      <h2> Weindaten </h2>
      <Form>
        <Form.Field>
          <label>Lieblingsweine</label>
          <Dropdown
            placeholder="Lieblingsweine auswählen"
            fluid
            selection
            options={anrede}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

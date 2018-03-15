import React, { Component, Fragment } from "react";
import {
  Segment,
  Statistic,
  Grid,
  Form,
  Input,
  Button,
  Divider
} from "semantic-ui-react";

export default class Verkauf extends Component {
  render() {
    return (
      <Fragment>
        <Grid.Column width={16} stretched>
          <Segment>
            <h2>Verkauf</h2>
            <Form textAlign="left">
              <Form.Field>
                <label>Vorname</label>
                <input placeholder="Vorname" />
              </Form.Field>
              <Form.Field>
                <label>Nachname</label>
                <input placeholder="Nachname" />
              </Form.Field>
              <Form.Field>
                <label>Lieferdatum</label>
                <input type="date" placeholder="Lieferdatum" />
              </Form.Field>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.Field>
                <label>Wein suchen</label>
                <Input icon="search" placeholder="Search..." />
              </Form.Field>
            </Form>
            <br />
            <br />
            <Divider horizontal>Oder</Divider>
            <br />
            <br />
            <Form>
              <Form.Field>
                <label>Name</label>
                <Input placeholder="Name" value="testwein" />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Jahrgang</label>
                  <Input placeholder="Name" value="1999" />
                </Form.Field>
                <Form.Field>
                  <label>Preis</label>
                  <Input placeholder="Name" value="12,35€" />
                </Form.Field>
              </Form.Group>
                <Form.Field>
                  <label>Anzahl</label>
                  <Input placeholder="Name" value="7" />
                </Form.Field>
              <Form.Field>
                <div style={{ textAlign: "right" }}>
                  <Button primary>Hinzufügen</Button>
                </div>
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
        {Wein("wein123", 1992, 123)}
        {Wein("testwein", 1999, "32,20")}
        {Wein("Weintest", 2011, "15,10")}
        <Grid.Column width={16} stretched>
          <Segment textAlign="right">
            <span style={{ fontSize: "150%" }}>
              <label> Gesamtpreis </label> 100,30€
            </span>
            <br />
            <br />
            <Form>
              <Form.Field style={{ textAlign: "right" }}>
                <Button primary>Bestellen</Button>
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
      </Fragment>
    );
  }
}

const Wein = (name, jahrgang, preis) => {
  return (
    <Grid.Column width={8} stretched>
      <Segment>
        <h2> Wein: {name}</h2>
        <h3> Jahrgang: {jahrgang}</h3>
        <h4 style={{ textAlign: "right" }}> Preis: {preis} € </h4>
        <br />
        <Button color="red"> Löschen </Button>
      </Segment>
    </Grid.Column>
  );
};

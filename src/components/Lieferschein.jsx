import React, { Component, Fragment } from "react";
import {
  Segment,
  Statistic,
  Grid,
  Form,
  Input,
  Button
} from "semantic-ui-react";

export default class Lieferschein extends Component {
  render() {
    return (
      <Fragment>
        <Grid.Column width={16} stretched>
          <Form>
            <Form.Field>
              <Input icon="search" placeholder="Search..." />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={16} stretched>
          <Segment>
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
                <Button primary>Hinzufügen</Button>
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
            <br/>
            <br/>
          </Segment>
          <Segment>
            <h2>Bestellung</h2>
            <Form textAlign="left">
              <Form.Field>
                <label>Lieferdatum</label>
                <input type="date" placeholder="Lieferdatum"/>
              </Form.Field>
              <Form.Field style={{textAlign:"right"}}>
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
        <br/>
        <Button color="red"> Löschen </Button>
      </Segment>
    </Grid.Column>
  );
};

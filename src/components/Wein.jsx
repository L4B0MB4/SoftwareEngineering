import React, { Component, Fragment } from "react";
import { Grid, Segment, Form, Button, Card } from "semantic-ui-react";
import Request from "./request";
const request = new Request();

export default class Wein extends Component {
  wineData = {};
  state = {};

  setWineData = (name, value) => {
    this.wineData[name] = value;
  };

  sendwineData = async () => {
    if (!this.wineData.shortname) {
      this.setState({ showError: true, errorMessage: "Bitte alle Felder ausfüllen!" });
      return;
    }
    let data = {
      type: "wine",
      data: { ...this.wineData }
    };
    let res = await request.insertData(data);
    if (res.data.success === true) {
      this.setState({ showSuccess: true, successMessage: res.data.message });
    } else {
      this.setState({ showError: true, errorMessage: "Ups da ist was schiefgelaufen" });
    }
  };

  render() {
    return (
      <Fragment>
        {this.successDialog()}
        {this.errorDialog()}
        <Grid.Column width={8} stretched>
          {this.WeinAnlegen()}
        </Grid.Column>
        <Grid.Column width={8} stretched>
          {this.HerstellerWein()}
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} />
          <Grid.Column width={4}>
            <Button primary style={{ width: "100%" }} onClick={this.sendwineData}>
              Anlegen
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Fragment>
    );
  }

  errorDialog = () => {
    if (this.state.showError)
      return (
        <Card
          style={{
            backgroundColor: "#e54747",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "10000"
          }}>
          <Card.Content>
            <Card.Header style={{ color: "whitesmoke" }}>Login Fehlgeschlagen</Card.Header>
            <Card.Description style={{ color: "whitesmoke" }}>Falscher Benutzername oder falsches Passwort</Card.Description>
            <Card.Content extra>
              <br />
              <Button onClick={() => this.setState({ showError: false })}>Schließen</Button>
            </Card.Content>
          </Card.Content>
        </Card>
      );
  };

  successDialog = () => {
    if (this.state.showSuccess) {
      return (
        <Card
          style={{
            backgroundColor: "rgb(56, 187, 91)",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: "10000"
          }}>
          <Card.Content>
            <Card.Header style={{ color: "whitesmoke" }}>Erfolg</Card.Header>
            <Card.Description style={{ color: "whitesmoke" }}>{this.state.successMessage}</Card.Description>
            <Card.Content extra>
              <br />
              <Button onClick={() => this.setState({ showSuccess: false })}>Schließen</Button>
            </Card.Content>
          </Card.Content>
        </Card>
      );
    }
  };

  WeinAnlegen = () => {
    return (
      <Segment>
        <h2> wineData </h2>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" onChange={e => this.setWineData("shortname", e.target.value)} />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Jahrgang</label>
              <input placeholder="Jahrgang" onChange={e => this.setWineData("jahrgang", e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Herkunft</label>
              <input placeholder="Herkunft" onChange={e => this.setWineData("herkunft", e.target.value)} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Alkoholgehalt</label>
              <input placeholder="Alkoholgehalt" onChange={e => this.setWineData("alkoholgehalt", e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Preis</label>
              <input placeholder="Preis" onChange={e => this.setWineData("preis", e.target.value)} />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    );
  };
  HerstellerWein = () => {
    return (
      <Segment>
        <h2> Hersteller </h2>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" onChange={e => this.setWineData("herstellername", e.target.value)} />
          </Form.Field>
        </Form>
      </Segment>
    );
  };
}

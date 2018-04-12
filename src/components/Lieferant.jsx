import React, { Component, Fragment } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown, Checkbox, Card } from "semantic-ui-react";
import Request from "./request";
const request = new Request();

export default class Lieferant extends Component {
  supplierData = {};
  state = {};

  setsupplierData = (name, value) => {
    this.supplierData[name] = value;
  };
  sendSupplierData = async () => {
    if (!this.supplierData.shortname) {
      this.setState({ showError: true, errorMessage: "Bitte alle Felder ausfüllen!" });
      return;
    }
    let data = {
      type: "supplier",
      data: { ...this.supplierData }
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
          {this.PersonalDaten()}
        </Grid.Column>
        <Grid.Column width={8} stretched>
          {this.AdressDaten()}
          {this.LieferantenNummer()}
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={8} />
          <Grid.Column width={4}>
            <Button primary style={{ width: "100%" }} onClick={this.sendSupplierData}>
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
            <Card.Header style={{ color: "whitesmoke" }}>Fehler</Card.Header>
            <Card.Description style={{ color: "whitesmoke" }}>{this.state.errorMessage}</Card.Description>
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

  PersonalDaten = () => {
    const anrede = [{ text: "Herr" }, { text: "Frau" }];
    return (
      <Segment>
        <h2> Personaldaten </h2>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" onChange={e => this.setsupplierData("name", e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Vorname</label>
            <input placeholder="Vorname" onChange={e => this.setsupplierData("forename", e.target.value)} />
          </Form.Field>
          <Form.Group>
            <Form.Field width={6}>
              <label>Anrede</label>
              <Dropdown
                placeholder="Anrede"
                fluid
                selection
                options={anrede}
                onChange={e => this.setsupplierData("salutation", e.target.value)}
              />
            </Form.Field>
            <Form.Field width={10}>
              <label>Alter</label>
              <input placeholder="Alter" type="number" onChange={e => this.setsupplierData("age", e.target.value)} />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field width={6}>
              <label>Tel. Vorwahl</label>
              <input placeholder="Vorwahl" onChange={e => this.setsupplierData("prefix", e.target.value)} />
            </Form.Field>
            <Form.Field width={10}>
              <label>Telefonnummer</label>
              <input placeholder="Telefonnummer" onChange={e => this.setsupplierData("phoneNumber", e.target.value)} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="email" onChange={e => this.setsupplierData("email", e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Gewerblich</label>
            <Checkbox label={{ children: "gewerblich" }} onChange={e => this.setsupplierData("commercial", e.target.value)} />
          </Form.Field>
        </Form>
      </Segment>
    );
  };

  AdressDaten = () => {
    return (
      <Segment>
        <h2> Adressdaten </h2>
        <Form>
          <Form.Group>
            <Form.Field width={6}>
              <label>PLZ</label>
              <input placeholder="PLZ" type="number" onChange={e => this.setsupplierData("postcode", e.target.value)} />
            </Form.Field>
            <Form.Field width={10}>
              <label>Ort</label>
              <input placeholder="Ort" onChange={e => this.setsupplierData("city", e.target.value)} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Straße und Hausnummer</label>
            <input placeholder="Straße und Hausnummer" onChange={e => this.setsupplierData("street", e.target.value)} />
          </Form.Field>
        </Form>
      </Segment>
    );
  };

  LieferantenNummer = () => {
    return (
      <Segment>
        <h2> Lieferant </h2>
        <Form>
          <Form.Field>
            <label>Lieferantenkürzel</label>
            <input placeholder="Lieferantenkürzel" onChange={e => this.setsupplierData("shortname", e.target.value)} />
          </Form.Field>
        </Form>
      </Segment>
    );
  };
}

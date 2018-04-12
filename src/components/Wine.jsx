import React, { Component, Fragment } from "react";
import { Grid, Segment, Form, Button, Card } from "semantic-ui-react";
import Request from "./request";
const request = new Request();

//Sorgt für Darstellung des Weinformulars
export default class Wine extends Component {
  wineData = {}; // alle Weindaten werden in diesem Objekt gesammelt
  state = {}; // React-Objekt -> wichtig für updaten des Views

  //Setzt Eigenschaftsschlüssel und -wert der Weindaten
  setWineData = (name, value) => {
    this.wineData[name] = value;
  };

  //sendet wie Weindaten zum Backend
  sendwineData = async () => {
    if (!this.wineData.shortname) {
      // falls der shortname (id) nicht falsey ist
      this.setState({ showError: true, errorMessage: "Bitte alle Felder ausfüllen!" });
      return;
    }
    let data = {
      // daten sind vom typ "wein"
      type: "wine",
      data: { ...this.wineData }
    };
    let res = await request.insertData(data); // warten auf asynchrone Post Funktion
    if (res.data.success === true) {
      // Setzen von state Eigenschaften für Dialogfenster
      this.setState({ showSuccess: true, successMessage: res.data.message });
    } else {
      this.setState({ showError: true, errorMessage: "Ups da ist was schiefgelaufen" });
    }
  };

  //Kompletter View / DOM-Ersteller
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

  // zeigt errorDialog an wenn state.showError wahr ist
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

  // zeigt successDialog an wenn state.showSuccess wahr ist
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

  // das Formular für Weindaten
  WeinAnlegen = () => {
    return (
      <Segment>
        <h2> Weindaten </h2>
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

  //Formular für den Hersteller des Weins
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

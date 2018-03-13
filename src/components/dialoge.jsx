import React, { Component } from "react";
import { Form, Checkbox, Button, Segment, Card } from "semantic-ui-react";
import Layout from "./Layout";

class Dialoge extends Component {
  render() {
    return (
      <Layout>
        <Card
          style={{
            backgroundColor: "#e54747",
            position: "fixed",
            top: "60px",
            right: "10px",
            zIndex: "10000"
          }}
        >
          <Card.Content>
            <Card.Header style={{ color: "whitesmoke" }}>
              Login Fehlgeschlagen
            </Card.Header>
            <Card.Description style={{ color: "whitesmoke" }}>
              Falscher Benutzername oder falsches Passwort
            </Card.Description>
            <Card.Content extra>
              <br />
              <Button>Schließen</Button>
            </Card.Content>
          </Card.Content>
        </Card> <Card
          style={{
            backgroundColor: "rgb(56, 187, 91)",
            position: "fixed",
            top: "210px",
            right: "10px",
            zIndex: "10000"
          }}
        >
          <Card.Content>
            <Card.Header style={{ color: "whitesmoke" }}>
              Login Erfolgreich
            </Card.Header>
            <Card.Description style={{ color: "whitesmoke" }}>
              Sie werden weitergeleitet ! 
            </Card.Description>
            <Card.Content extra>
              <br />
              <Button>Schließen</Button>
            </Card.Content>
          </Card.Content>
        </Card>
      </Layout>
    );
  }
}

export default Dialoge;

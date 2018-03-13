import React, { Component } from "react";
import { Form, Checkbox, Button, Segment, Card } from "semantic-ui-react";
import Layout from "./Layout";

class Login extends Component {
  render() {
    return (
      <Layout>
        <Card
          style={{
            backgroundColor: "#e54747",
            position: "fixed",
            top: "10px",
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
            <br/>
              <Button >Schließen</Button>
            </Card.Content>
          </Card.Content>
        </Card>
        <Segment raised>
          <Form>
            <Form.Field>
              <label>Benutzername</label>
              <input placeholder="Benutzername" />
            </Form.Field>
            <Form.Field>
              <label>Passwort</label>
              <input placeholder="Passwort" type="password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Eingeloggt bleiben" />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Segment>
      </Layout>
    );
  }
}

export default Login;

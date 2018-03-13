import React, { Component } from "react";
import { Form, Checkbox, Button, Segment, Card } from "semantic-ui-react";
import Layout from "./Layout";

class Login extends Component {
  render() {
    return (
      <Layout>
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

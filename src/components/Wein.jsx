import React, { Component, Fragment } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown, Checkbox } from "semantic-ui-react";

export default class Wein extends Component {
    weinDaten = {};

    setWeindaten = (name, value) => {
        this.weinDaten[name] = value;
    };
    sendWeindaten = () => {
        console.log(this.weinDaten);
    };

    render() {
        return (
            <Fragment>
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
                        <Button primary style={{ width: "100%" }} onClick={this.sendWeindaten}>
                            Anlegen
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Fragment>
        );
    }

    WeinAnlegen = () => {
        return (
            <Segment>
                <h2> Weindaten </h2>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            onChange={(e) => this.setWeindaten("name", e.target.value)}
                        />
                    </Form.Field>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>Jahrgang</label>
                            <input
                                placeholder="Jahrgang"
                                onChange={(e) => this.setWeindaten("jahrgang", e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Herkunft</label>
                            <input
                                placeholder="Herkunft"
                                onChange={(e) => this.setWeindaten("herkunft", e.target.value)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>Alkoholgehalt</label>
                            <input
                                placeholder="Alkoholgehalt"
                                onChange={(e) => this.setWeindaten("alkoholgehalt", e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Preis</label>
                            <input
                                placeholder="Preis"
                                onChange={(e) => this.setWeindaten("preis", e.target.value)}
                            />
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
                        <input
                            placeholder="Name"
                            onChange={(e) => this.setWeindaten("herstellername", e.target.value)}
                        />
                    </Form.Field>
                </Form>
            </Segment>
        );
    };
}

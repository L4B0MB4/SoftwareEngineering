import React, { Component, Fragment } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown, Checkbox } from "semantic-ui-react";

export default class Lieferant extends Component {
    lieferantenDaten = {};

    setLieferantenDaten = (name, value) => {
        this.lieferantenDaten[name] = value;
    };
    sendLieferantenDaten = () => {
        console.log(this.lieferantenDaten);
    };

    render() {
        return (
            <Fragment>
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
                        <Button
                            primary
                            style={{ width: "100%" }}
                            onClick={this.sendLieferantenDaten}
                        >
                            Anlegen
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Fragment>
        );
    }

    PersonalDaten = () => {
        const anrede = [{ text: "Herr" }, { text: "Frau" }];
        return (
            <Segment>
                <h2> Personaldaten </h2>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            onChange={(e) => this.setLieferantenDaten("name", e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Vorname</label>
                        <input
                            placeholder="Vorname"
                            onChange={(e) => this.setLieferantenDaten("forename", e.target.value)}
                        />
                    </Form.Field>
                    <Form.Group>
                        <Form.Field width={6}>
                            <label>Anrede</label>
                            <Dropdown
                                placeholder="Anrede"
                                fluid
                                selection
                                options={anrede}
                                onChange={(e) =>
                                    this.setLieferantenDaten("salutation", e.target.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field width={10}>
                            <label>Alter</label>
                            <input
                                placeholder="Alter"
                                type="number"
                                onChange={(e) => this.setLieferantenDaten("age", e.target.value)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={6}>
                            <label>Tel. Vorwahl</label>
                            <input
                                placeholder="Vorwahl"
                                onChange={(e) => this.setLieferantenDaten("prefix", e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field width={10}>
                            <label>Telefonnummer</label>
                            <input
                                placeholder="Telefonnummer"
                                onChange={(e) =>
                                    this.setLieferantenDaten("phoneNumber", e.target.value)
                                }
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="Email"
                            type="email"
                            onChange={(e) => this.setLieferantenDaten("email", e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Gewerblich</label>
                        <Checkbox
                            label={{ children: "gewerblich" }}
                            onChange={(e) => this.setLieferantenDaten("commercial", e.target.value)}
                        />
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
                            <input
                                placeholder="PLZ"
                                type="number"
                                onChange={(e) =>
                                    this.setLieferantenDaten("postcode", e.target.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field width={10}>
                            <label>Ort</label>
                            <input
                                placeholder="Ort"
                                onChange={(e) => this.setLieferantenDaten("city", e.target.value)}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Straße und Hausnummer</label>
                        <input
                            placeholder="Straße und Hausnummer"
                            onChange={(e) => this.setLieferantenDaten("street", e.target.value)}
                        />
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
                        <input
                            placeholder="Lieferantenkürzel"
                            onChange={(e) => this.setLieferantenDaten("shortname", e.target.value)}
                        />
                    </Form.Field>
                </Form>
            </Segment>
        );
    };
}

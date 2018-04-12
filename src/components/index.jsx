import React, { Component, Fragment } from "react";
import { Grid, Menu, Segment, Form, Button, Dropdown, Checkbox } from "semantic-ui-react";
import Layout from "./Layout";
import Verkauf from "./Verkauf";
import Einkauf from "./Einkauf";
import Wein from "./Wein";
import Lieferant from "./Lieferant";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "kunde"
        };
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name="Kunde"
                                active={this.state.active === "kunde"}
                                onClick={() => this.onClick("kunde")}
                            />
                            <Menu.Item
                                name="Wein"
                                active={this.state.active === "wein"}
                                onClick={() => this.onClick("wein")}
                            />
                            <Menu.Item
                                name="Lieferant"
                                active={this.state.active === "lieferant"}
                                onClick={() => this.onClick("lieferant")}
                            />
                            <Menu.Item
                                name="Verkauf"
                                active={this.state.active === "verkauf"}
                                onClick={() => this.onClick("verkauf")}
                            />
                            <Menu.Item
                                name="Einkauf"
                                active={this.state.active === "einkauf"}
                                onClick={() => this.onClick("einkauf")}
                            />
                            <Menu.Item
                                name="Benutzer"
                                active={this.state.active === "benutzer"}
                                onClick={() => this.onClick("benutzer")}
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={12}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                    <Grid>
                                        {this.state.active === "kunde" ? Kunde() : null}
                                        {this.state.active === "lieferant" ? <Lieferant /> : null}
                                        {this.state.active === "wein" ? <Wein /> : null}
                                        {this.state.active === "benutzer" ? Benutzer() : null}
                                        {this.state.active === "verkauf" ? <Verkauf /> : null}
                                        {this.state.active === "einkauf" ? <Einkauf /> : null}
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }

    onClick = (active) => {
        this.setState({ active });
    };
}

export default Index;

const Benutzer = () => {
    return (
        <Fragment>
            <Grid.Column width={8} stretched>
                {BenutzerDaten()}
            </Grid.Column>
            <Grid.Column width={8} stretched>
                {BenutzerRechte()}
            </Grid.Column>
        </Fragment>
    );
};

const BenutzerRechte = () => {
    return (
        <Segment>
            <h2> Benutzerrechte </h2>
            <Form>
                <Form.Field>
                    <Checkbox
                        label={
                            <label>
                                <b>Ist Admin</b>
                            </label>
                        }
                    />
                </Form.Field>
            </Form>
        </Segment>
    );
};

const BenutzerDaten = () => {
    return (
        <Segment>
            <h2> Benutzerdaten </h2>
            <Form>
                <Form.Field>
                    <label>Benutzername</label>
                    <input placeholder="Benutzername" />
                </Form.Field>
                <Form.Field>
                    <label>Passwort</label>
                    <input placeholder="Passwort" type="password" />
                </Form.Field>
            </Form>
        </Segment>
    );
};

const LieferantenNummer = () => {
    return (
        <Segment>
            <h2> Lieferant </h2>
            <Form>
                <Form.Field>
                    <label>Lieferantenkürzel</label>
                    <input placeholder="Lieferantenkürzel" />
                </Form.Field>
            </Form>
        </Segment>
    );
};

const Kunde = () => {
    return (
        <Fragment>
            <Grid.Column width={8} stretched>
                {PersonalDaten()}
            </Grid.Column>
            <Grid.Column width={8} stretched>
                {AdressDaten()}
                {WeinDaten()}
            </Grid.Column>
        </Fragment>
    );
};

const PersonalDaten = () => {
    const anrede = [{ text: "Herr" }, { text: "Frau" }];
    return (
        <Segment>
            <h2> Personaldaten </h2>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" />
                </Form.Field>
                <Form.Field>
                    <label>Vorname</label>
                    <input placeholder="Vorname" />
                </Form.Field>
                <Form.Group>
                    <Form.Field width={6}>
                        <label>Anrede</label>
                        <Dropdown placeholder="Anrede" fluid selection options={anrede} />
                    </Form.Field>
                    <Form.Field width={10}>
                        <label>Alter</label>
                        <input placeholder="Alter" type="number" />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width={6}>
                        <label>Tel. Vorwahl</label>
                        <input placeholder="Vorwahl" />
                    </Form.Field>
                    <Form.Field width={10}>
                        <label>Telefonnummer</label>
                        <input placeholder="Telefonnummer" />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" type="email" />
                </Form.Field>
                <Form.Field>
                    <label>Gewerblich</label>
                    <Checkbox label={{ children: "gewerblich" }} />
                </Form.Field>
            </Form>
        </Segment>
    );
};

const AdressDaten = () => {
    return (
        <Segment>
            <h2> Adressdaten </h2>
            <Form>
                <Form.Group>
                    <Form.Field width={6}>
                        <label>PLZ</label>
                        <input placeholder="PLZ" type="number" />
                    </Form.Field>
                    <Form.Field width={10}>
                        <label>Ort</label>
                        <input placeholder="Ort" />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Straße und Hausnummer</label>
                    <input placeholder="Straße und Hausnummer" />
                </Form.Field>
            </Form>
        </Segment>
    );
};

const WeinDaten = () => {
    const weine = [{ text: "Wein A" }, { text: "Wein B" }];
    return (
        <Segment>
            <h2> Weindaten </h2>
            <Form>
                <Form.Field>
                    <label>Lieblingsweine</label>
                    <Dropdown placeholder="Lieblingsweine" fluid selection options={weine} />
                </Form.Field>
            </Form>
        </Segment>
    );
};

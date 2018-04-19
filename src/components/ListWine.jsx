import React, { Component, Fragment } from "react";
import { Feed, Icon, Segment, Input, Divider, Card, Button } from "semantic-ui-react";
import Layout from "./Layout";
import Request from "./request";
import _ from "lodash";
const request = new Request();

//Lists the available wine
class ListWine extends Component {
    constructor(props) {
        super(props);
        this.getWine(); //get Wine of API request
        this.state = {};
    }

    //if delete button was pressed -> delete Item via name
    deleteItemByname = async name => {
        let res = await request.deleteItemByname(name);
        if (res.data.success === true) {
            this.setState({ showSuccess: true, successMessage: res.data.message });
            this.getWine();
        } else {
            this.setState({ showError: true, errorMessage: res.data.message ? res.data.message : "Ups da ist was schiefgelaufen" });
        }
    };

    //API Request
    getWine = async () => {
        let res = await request.getAllData();
        let arr = res.data;
        arr = _.filter(arr, { type: "wine" });
        this.setState({ wine: arr });
    };
    // Listview for wine
    render() {
        return (
            <Layout>
                {this.successDialog()}
                {this.errorDialog()}
                <Feed size="large">
                    {this.state.wine
                        ? this.state.wine.map(item => (
                            <Fragment>
                                <Feed.Event style={{ position: "relative" }}>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            {this.getValues(item.data).map(i => (
                                                <p>{i.name + ": " + i.value}</p>
                                            ))}
                                        </Feed.Summary>
                                        <div>
                                            <Icon
                                                name="delete"
                                                onClick={() =>
                                                    this.deleteItemByname(
                                                        item.data.name
                                                    )
                                                }
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    right: "10px"
                                                }}
                                            />
                                        </div>
                                    </Feed.Content>
                                </Feed.Event>
                                <Divider />
                            </Fragment>
                        ))
                        : null}
                </Feed>
            </Layout>
        );
    }

    // shows ErrorDialog if state.showError == true
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
                        <Card.Description style={{ color: "whitesmoke" }}>
                            {this.state.errorMessage}
                        </Card.Description>
                        <Card.Content extra>
                            <br />
                            <Button onClick={() => this.setState({ showError: false })}>
                                Schließen
                            </Button>
                        </Card.Content>
                    </Card.Content>
                </Card>
            );
    };

    // shows SuccessDialog if state.showSuccess == true
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
                        <Card.Description style={{ color: "whitesmoke" }}>
                            {this.state.successMessage}
                        </Card.Description>
                        <Card.Content extra>
                            <br />
                            <Button onClick={() => this.setState({ showSuccess: false })}>
                                Schließen
                            </Button>
                        </Card.Content>
                    </Card.Content>
                </Card>
            );
        }
    };

    // Goes through object and sets an array with {keyname, value} elements
    getValues = item => {
        let arr = [];
        for (var key in item) {
            if (!item.hasOwnProperty(key)) continue;

            var obj = item[key];
            arr.push({ name: key, value: item[key] });
        }
        return arr;
    };
}

export default ListWine;

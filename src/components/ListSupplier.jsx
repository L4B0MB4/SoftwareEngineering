import React, { Component, Fragment } from "react";
import { Feed, Icon, Segment, Input, Divider, Card, Button } from "semantic-ui-react";
import Layout from "./Layout";
import Request from "./request";
import _ from "lodash";
const request = new Request();

//nearly the same as ListWine <- thats where the comments are ;)
class ListSupplier extends Component {
    constructor(props) {
        super(props);
        this.getSupplier();
        this.state = {};
    }

    deleteItemByShortname = async shortname => {
        let res = await request.deleteItemByShortname(shortname);
        if (res.data.success === true) {
            this.setState({ showSuccess: true, successMessage: res.data.message });
            this.getSupplier();
        } else {
            this.setState({ showError: true, errorMessage: "Ups da ist was schiefgelaufen" });
        }
    };

    getSupplier = async () => {
        let res = await request.getAllData();
        let arr = res.data;
        arr = _.filter(arr, { type: "supplier" });
        this.setState({ suppliers: arr });
    };
    render() {
        return (
            <Layout>
                {this.successDialog()}
                {this.errorDialog()}
                <Feed size="large">
                    {this.state.suppliers
                        ? this.state.suppliers.map(item => (
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
                                                      this.deleteItemByShortname(
                                                          item.data.shortname
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

export default ListSupplier;

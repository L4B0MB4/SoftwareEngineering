import React, { Component, Fragment } from "react";
import { Feed, Icon, Segment, Input, Divider, Card, Button } from "semantic-ui-react";
import Layout from "./Layout";
import Request from "./request";
import _ from "lodash";
const request = new Request();

//Zeigt eine Liste aller Weine im System an
class ListWine extends Component {
  constructor(props) {
    super(props);
    this.getWine(); // bekomme Wein über API anfrage
    this.state = {};
  }

  //wenn Löschen-Knopf gedrückt wird eine API-Anfrage gestartet mit dem Wert des "shortname" des Items
  deleteItemByShortname = async shortname => {
    let res = await request.deleteItemByShortname(shortname);
    if (res.data.success === true) {
      this.setState({ showSuccess: true, successMessage: res.data.message });
      this.getWine();
    } else {
      this.setState({ showError: true, errorMessage: "Ups da ist was schiefgelaufen" });
    }
  };

  //API Anfrage an das Backend
  getWine = async () => {
    let res = await request.getAllData();
    let arr = res.data;
    arr = _.filter(arr, { type: "wine" });
    this.setState({ wine: arr });
  };
  // Listendarstellung der Weine
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
                      <Feed.Summary>{this.getValues(item.data).map(i => <p>{i.name + ": " + i.value}</p>)}</Feed.Summary>
                      <div>
                        <Icon
                          name="delete"
                          onClick={() => this.deleteItemByShortname(item.data.shortname)}
                          style={{ position: "absolute", top: "0px", right: "10px" }}
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

  // Geht durch alle Eigenschaften eines Objekts und listet deren Namen + Wert in einem Array auf
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

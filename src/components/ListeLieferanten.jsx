import React, { Component } from "react";
import { Feed, Icon, Segment, Input, Divider } from "semantic-ui-react";
import Layout from "./Layout";
import Request from "./request";
const request = new Request();

class Search extends Component {
  render() {
    return (
      <Layout>
        <Feed size="large">
          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <p>Wein A</p>
                <p>Preis: 22.15 €</p>
                <p>Herunft: Italien </p>
                <p>Jahrgang: 1982 </p>
              </Feed.Summary>
              <Feed.Extra>
                <p>Bei Hersteller XYZ</p>
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
          <Divider />
        </Feed>
      </Layout>
    );
  }
}

export default Search;

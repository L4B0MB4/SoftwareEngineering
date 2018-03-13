import React, { Component } from "react";
import { Feed, Icon, Segment, Input, Divider } from "semantic-ui-react";
import Layout from "./Layout";

class Search extends Component {
  render() {
    return (
      <Layout>
        <Segment>
          <Input
            icon="search"
            placeholder="Search..."
            style={{ width: "100%" }}
          />
        </Segment>
        <Segment>
          <b>Entsprechend für Kunden und Lieferanten Suche!</b>
          <br />
          <br />
          <br />
          <Divider />
          <Feed size="large">
            <Feed.Event>
              <Feed.Label>
                <img src="https://www.ps-wein.de/shop/media/catalog/product/cache/1/image/600x600/5e06319eda06f020e43594a9c230972d/c/1/c189-arrogant-frog-cabernet-sauvignon-merlot-jean-claude-mas_1.jpg" />
              </Feed.Label>
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
            <Feed.Event>
              <Feed.Label image="http://www.lampari.de/wp-content/uploads/2013/09/Fotolia_49334423_M.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  <p>Wein B</p>
                  <p>Preis: 13.20 €</p>
                  <p>Herunft: Frankreich </p>
                  <p>Jahrgang: 1992 </p>
                </Feed.Summary>
                <Feed.Extra>
                  <p>Bei Hersteller XYZ</p>
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Label image="http://www.lampari.de/wp-content/uploads/2013/09/Fotolia_49334423_M.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  <p>Wein C</p>
                  <p>Preis: 113.20 €</p>
                  <p>Herunft: Frankreich </p>
                  <p>Jahrgang: 2011 </p>
                </Feed.Summary>
                <Feed.Extra>
                  <p>Bei Hersteller WWA</p>
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Segment>
      </Layout>
    );
  }
}

export default Search;

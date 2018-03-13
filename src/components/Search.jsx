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
          <Feed size="large">
            <Feed.Event>
              <Feed.Label>
                <img src="https://www.ps-wein.de/shop/media/catalog/product/cache/1/image/600x600/5e06319eda06f020e43594a9c230972d/c/1/c189-arrogant-frog-cabernet-sauvignon-merlot-jean-claude-mas_1.jpg" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  Wein A
                  <Feed.Date>im Handel seit 2001</Feed.Date>
                </Feed.Summary>
                <Feed.Extra>
                    Bei Hersteller XYZ
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Label image="http://www.lampari.de/wp-content/uploads/2013/09/Fotolia_49334423_M.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  Wein B
                  <Feed.Date>im Handel seit 2013</Feed.Date>
                </Feed.Summary>
                <Feed.Extra>
                    Bei Hersteller XYZ
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
            <Divider />
            <Feed.Event>
              <Feed.Label image="http://www.lampari.de/wp-content/uploads/2013/09/Fotolia_49334423_M.jpg" />
              <Feed.Content>
                <Feed.Summary>
                  Wein C
                  <Feed.Date>im Handel seit 1992</Feed.Date>
                </Feed.Summary>
                <Feed.Extra>
                    Bei Hersteller WWA
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

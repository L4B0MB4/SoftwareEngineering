import React, { Component, Fragment } from "react";
import { Feed, Icon, Segment, Input, Divider } from "semantic-ui-react";
import Layout from "./Layout";
import Request from "./request";
import _ from "lodash";
const request = new Request();

class ListWine extends Component {
  constructor(props) {
    super(props);
    this.getSupplier();
    this.state = {};
  }

  getSupplier = async () => {
    let res = await request.getAllData();
    let arr = res.data;
    arr = _.filter(arr, { type: "wine" });
    this.setState({ wine: arr });
  };
  render() {
    return (
      <Layout>
        <Feed size="large">
          {this.state.wine
            ? this.state.wine.map(item => (
                <Fragment>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Summary>{this.getValues(item.data).map(i => <p>{i.name + ": " + i.value}</p>)}</Feed.Summary>
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

  getValues = item => {
    let arr = [];
    for (var key in item) {
      // skip loop if the property is from prototype
      if (!item.hasOwnProperty(key)) continue;

      var obj = item[key];
      arr.push({ name: key, value: item[key] });
    }
    return arr;
  };
}

export default ListWine;

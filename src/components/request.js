import fetch from "isomorphic-unfetch";
import queryString from "query-string";

class Request {
  constructor() {
    this.url = "http://localhost:3001";
  }

  async callFetch(method, path, body, formencode) {
    let customPath = path;
    const config = {
      method,
      headers: {
        "content-type": formencode ? "application/x-www-form-urlencoded" : "application/json"
      }
    };

    if (formencode) {
      config.body = queryString.stringify(body);
    } else if (config.method !== "GET") {
      config.body = JSON.stringify(body);
    } else if (body) {
      customPath = `${path}?${queryString.stringify(body)}`;
    }
    try {
      const res = await fetch(`${this.url ? this.url : ""}/${customPath}`, config);
      const data = await res.json();
      return {
        data,
        response: res
      };
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  insertData(data) {
    return this.callFetch("POST", "insert", data);
  }
}

export default Request;

import fetch from "isomorphic-unfetch";
import queryString from "query-string";
import FormData from "form-data";

class Request {
  constructor(url) {
    this.url = url;
    this.cookie = "";
  }

  async callFetch(method, path, body, formencode) {
    let customPath = path;
    const config = {
      method,
      headers: {
        Cookie: this.cookie,
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
      const res = await fetch(`${this.url ? this.url : ""}/api${customPath}`, config);
      const data = await res.json();
      this.cookie = this.cookie ? this.cookie : res.headers._headers["set-cookie"];
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
    return this.callFetch("POST", "/insert", data);
  }
}

export default Request;

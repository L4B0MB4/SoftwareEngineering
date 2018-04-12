import fetch from "isomorphic-unfetch";
import queryString from "query-string";

class Request {
  constructor() {
    this.url = "http://localhost:3001";
  }

  //x-beliebige API anfrage
  async callFetch(method, path, body, formencode) {
    let customPath = path;
    const config = {
      method,
      headers: {
        "content-type": formencode ? "application/x-www-form-urlencoded" : "application/json" // Anpassen des content-types
      }
    };
    // Anpassen der übertragenen Daten
    if (formencode) {
      config.body = queryString.stringify(body);
    } else if (config.method !== "GET") {
      config.body = JSON.stringify(body);
    } else if (body) {
      customPath = `${path}?${queryString.stringify(body)}`;
    }
    try {
      const res = await fetch(`${this.url ? this.url : ""}/${customPath}`, config); // asynchrones Warten auf Antwort der API
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

  // Funktionen die Schnittstellenanfragen an das Backend starten

  insertData(data) {
    return this.callFetch("POST", "insert", data);
  }
  getAllData() {
    return this.callFetch("GET", "get");
  }
  deleteItemByShortname(shortname) {
    return this.callFetch("Post", "delete", { shortname });
  }
}

export default Request;

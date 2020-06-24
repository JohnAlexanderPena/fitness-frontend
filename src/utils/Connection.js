import axios from "axios";
export default class Connection {
  // constructor(
  //   connectionObject = {
  //     ip: process.env.REACT_APP_BACKEND_IP,
  //     port: process.env.REACT_APP_BACKEND_PORT
  //   }
  // ) {
  //   this.connectionObject = { ...connectionObject };
  // }
  /**
   * @param {string} accessToken
   *
   */
  constructor(accessToken) {
    this.accessToken = accessToken || null;

    this.status = { message: "", code: "" };
  }
  /**
   * @param {string} baseUrl
   * @param {*} data
   *
   */
  create(baseUrl, data) {
    return this.request("post", baseUrl, data);
  }
  /**
   * @param {string} baseUrl
   * @param {(string | number)} id
   *
   */
  delete(baseUrl, id) {
    return this.request("delete", `${baseUrl}/${id}`);
  }
  /**
   * @param {string} baseUrl
   * @param {*} data
   *
   */
  update(baseUrl, data) {
    return this.request("patch", baseUrl, data);
  }
  /**
   * @param {string} baseUrl
   */
  get(baseUrl, data) {
    return this.request("get", baseUrl, data);
  }

  setData(data = {}) {
    this.data = data;
  }
  getLastRequestData() {
    return this.data ? this.data : null;
  }

  getDownloadedData() {
    return this.data.headers ? this.data.headers : null;
  }

  setStatus(code, message) {
    this.status = { message, code };
  }
  getStatus() {
    return { ...this.status };
  }
  async request(method, url, data) {
    try {
      // const { status, statusText } = [];

      await axios({
        method,
        url,
        data,
        headers: {
          Authorization: this.accessToken,
        },
      })
        .then((response) => {
          this.setData(response["data"]);
          this.setStatus(response.status, response.headers);

          console.log("SUCCESS RESPONSE: ", response.data);
          console.log("SUCCESS CODE: ", response.status);
        })
        .catch((error) => {
          console.log("ERROR RESPONSE: ", error.response.data);
          console.log("ERROR CODE: ", error.response.status);
          this.setData();
          this.setStatus(error.response.status, error.response.data);
        });

      return { data: this.getLastRequestData(), status: this.getStatus() };
    } catch (error) {
      const status = error.message.split(" ")[
        error.message.split(" ").length - 1
      ];
      this.setStatus(status, error.message);
      return { data: error.response?.data, status, statusText: error.message };
    }
  }

  async fileUpload(url, files, data = null, onUploadProgress) {
    // debugger;
    const formData = new FormData();
    formData.append("data", data);

    files.document.map((file, index) =>
      formData.append("files", file, file.name)
    );
    await axios({
      method: "POST",
      url,
      data: formData,
      onUploadProgress,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: this.accessToken,
      },
    }).then((response) => {
      this.setData(response["data"]);
      this.setStatus(response.status, response.headers);
    });
  }

  //   async fileDownload(url, data) {
  //     await axios({
  //       method: "POST",
  //       url,
  //       data,
  //       headers: {
  //         Authorization: this.accessToken,
  //       },
  //       responseType: "blob",
  //     })
  //       .then((response) => {
  //         this.setData(response.headers["filename"]);
  //         this.setStatus(response.status, response.headers);
  //         return { data: this.getLastRequestData(), status: this.getStatus() };
  //       })
  //       .catch((error) => console.log(error));
  //   }
}

//base domain
// parameters: the route
//return results

// methods get or post

//errors
// timeout
// wrong route

// manage exceptions

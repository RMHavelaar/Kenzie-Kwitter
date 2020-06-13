import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async profile(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      console.log(result, "fromAPI");
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async putPhoto(username, picture) {
    try {
      const result = await this.axiosInstance.put(
        `/users/${username}/picture`,
        picture
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async getPhoto(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}/picture`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async addUser({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async deleteUser(username) {
    try {
      const result = await this.axiosInstance.delete(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async addLike(messageId) {
    try {
      const result = await this.axiosInstance.post("/likes", {
        messageId,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async removeLike(likeId) {
    try {
      const result = await this.axiosInstance.delete(`/likes/${likeId}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
    }
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
    }
  }
  
  async getMessages() {
    try {
      const result = await this.axiosInstance.get(`/messages`);
      console.log(result);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();

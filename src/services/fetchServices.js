const fetchService =
  (method) =>
  async ({ endpoint, body = null, headers = {} }) => {
    if (!endpoint) throw new Error("missing endpoint if the request");

    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(endpoint, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error in the request");
      }

      return data;
    } catch (error) {
      console.error("Error in the request:", error);
      throw error;
    }
  };

export const fetchServices = {
  get: fetchService("GET"),
  post: fetchService("POST"),
  put: fetchService("PUT"),
  patch: fetchService("PATCH"),
  remove: fetchService("DELETE")
};

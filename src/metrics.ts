import client from "prom-client";

const register = new client.Registry();

client.collectDefaultMetrics({
  register
});

export const requestCounter = new client.Counter({
  name: "app_requests_total",
  help: "Total number of requests"
});

export const errorCounter = new client.Counter({
  name: "app_errors_total",
  help: "Total number of errors"
});

register.registerMetric(requestCounter);
register.registerMetric(errorCounter);

export { register };
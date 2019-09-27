import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 180,
  duration: "30s"
};

export default function() {
  let response = http.get("http://localhost:3000");
  sleep(1);
};

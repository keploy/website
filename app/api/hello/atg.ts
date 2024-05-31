async function fetchAPIPost(data: String, endpoint: String) {
  const headers = { "Content-Type": "application/json" };
  const API_URL = `http://localhost:8000/${endpoint}`;
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      data,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.result;
}
async function fetchAPIGet(endpoint: String) {
  const API_URL = `http://localhost:8000/${endpoint}`;
  const res = await fetch(API_URL, {
    method: "GET",
  });

  const json = await res.json();

  if (!res.ok) {
    console.error('Failed to fetch API:', json);
    throw new Error("Failed to fetch API");
  }

  return json;
}

async function fetchAPIProxy(data: String, endpoint: String) {
  const headers = { "Content-Type": "application/json" };
  const API_URL = `http://localhost:9000/${endpoint}`;
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      data,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.stringifiedData;
}

export async function commandStart(command: String) {
  const data = await fetchAPIProxy(command, "start");
  const RealData = `

  ▓██▓▄
  ▓▓▓▓██▓█▓▄
   ████████▓▒
        ▀▓▓███▄      ▄▄   ▄               ▌
       ▄▌▌▓▓████▄    ██ ▓█▀  ▄▌▀▄  ▓▓▌▄   ▓█  ▄▌▓▓▌▄ ▌▌   ▓
     ▓█████████▌▓▓   ██▓█▄  ▓█▄▓▓ ▐█▌  ██ ▓█  █▌  ██  █▌ █▓
    ▓▓▓▓▀▀▀▀▓▓▓▓▓▓▌  ██  █▓  ▓▌▄▄ ▐█▓▄▓█▀ █▓█ ▀█▄▄█▀   █▓█
     ▓▌                           ▐█▌                   █▌
      ▓

version: 2.0.0-alpha78

🐰 Keploy:     INFO            {"keploy test and mock path": "/home/aditya/Desktop/samples-typescript/express-mongoose/keploy"}
🐰 Keploy:     INFO    keploy initialized and probes added to the kernel.
🐰 Keploy:     INFO    Proxy started at port:1000
🐰 Keploy:     INFO    starting TCP DNS server at addr :26789

> NodeMongo@1.0.0 dev
> nodemon src/app.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter "rs"
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting "node src/app.js"
(node:36605) [DEP0040] DeprecationWarning: The punycode module is deprecated. Please use a userland alternative instead.
(Use node --trace-deprecation ... to show where the warning was created)
Listening on port 8000
Connected to MongoDB
KEPLOY HAS STARTED AWESOME RIGHT!!!!
  `;
  return RealData;
}
export async function commandStop(command: String) {
  const data = await fetchAPIProxy(command, "stop");
  const RealData = "Server as Been Stoped"
  return RealData;
}
export async function commandTest(command: string): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(async () => {
      try {
        const Numbers: string[] = await fetchAPIProxy(command, "testCoverage");
          if (Numbers.length!=0) {
            console.log(Numbers);
            resolve(Numbers);
          } else {
            // Data is not available
            resolve(["No data available"]);
          }
      } catch (error) {
        // Handle errors, if any
        console.error("An error occurred:", error);
        reject("Error occurred while fetching data");
      }
    }, 0); // Wait for 40 seconds before starting to fetch data
  });
}

export async function CurlAPI(){
  const data = await fetchAPIGet("students");
  console.log(data);
}



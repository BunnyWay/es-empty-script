import * as BunnySDK from "https://esm.sh/@bunny.net/edgescript-sdk@0.10.0";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("Starting server...");
const listener = BunnySDK.net.tcp.unstable_new();

console.log("Listening on: ", BunnySDK.net.tcp.toString(listener));
BunnySDK.net.http.serve(
  async (req) => {
    console.log(`[INFO]: ${req.method} - ${req.url}`);
    await sleep(1);
    return new Response("Hello mom!");
  },
);

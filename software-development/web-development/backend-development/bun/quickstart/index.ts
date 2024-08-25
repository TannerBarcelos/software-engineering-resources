import figlet from "figlet";

const server = Bun.serve({
  fetch(req) {
    return new Response("Hello from my first Bun server");
  },
});

const figOpts: figlet.Options = { horizontalLayout: "full"}

console.log(figlet.textSync("New Bun Server", figOpts));
console.log(`Listening on http://localhost:${server.port} ...`);
import Server from "./Server";

export async function start(): Promise<void> {
  const server = new Server();
  server.run(3000);
}
start();

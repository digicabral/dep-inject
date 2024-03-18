import fastify, { FastifyInstance } from "fastify";
import { Symbols } from "./domain/Symbols";
import { Warrior } from "./domain/interfaces";
import { myContainer } from "./inversify.config";

export default class Server {
  private server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  public async run(port: number) {
    const ninja = myContainer.get<Warrior>(Symbols.Warrior);

    this.server.route({
      url: "/test",
      method: "GET",
      handler: async (request, reply) => {
        const teste1 = ninja.fight();
        const teste2 = ninja.sneak();
        reply.send({ fight: teste1, sneak: teste2 });
      },
    });

    this.server.listen({ port }, () =>
      console.log("server listening on port " + port)
    );
  }
}

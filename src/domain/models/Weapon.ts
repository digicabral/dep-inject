import { injectable } from "inversify";
import "reflect-metadata";
import { ThrowableWeapon, Weapon } from "../interfaces";

@injectable()
class Katana implements Weapon {
  public hit(): string {
    return "cut";
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw(): string {
    return "hit";
  }
}

export { Katana, Shuriken };

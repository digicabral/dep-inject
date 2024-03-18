import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Symbols } from "../Symbols";
import { ThrowableWeapon, Warrior, Weapon } from "../interfaces";

@injectable()
class Ninja implements Warrior {
  @inject(Symbols.Weapon) private _katana: Weapon;
  @inject(Symbols.ThrowableWeapon) private _shuriken: ThrowableWeapon;

  public fight(): string {
    return this._katana.hit();
  }

  public sneak(): string {
    return this._shuriken.throw();
  }
}

export { Ninja };

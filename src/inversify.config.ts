import { Container } from "inversify";
import { Symbols } from "./domain/Symbols";
import { ThrowableWeapon, Warrior, Weapon } from "./domain/interfaces";
import { Ninja } from "./domain/models/Ninja";
import { Katana, Shuriken } from "./domain/models/Weapon";

const myContainer = new Container();
myContainer.bind<Warrior>(Symbols.Warrior).to(Ninja);
myContainer.bind<Weapon>(Symbols.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(Symbols.ThrowableWeapon).to(Shuriken);

export { myContainer };

export interface Hero {
  id: number;
  name: string;
}

export class SuperHero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string,
  ) {}
}
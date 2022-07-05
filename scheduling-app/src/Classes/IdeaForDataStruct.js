class Entity {
  constructor(id = 0, attributes = new Attribute()) {
    this.id = id;
    this.attributes = attributes;
  }
  addAttribute(att, value) {
    this.attributes[att] = value;
  }
}

class Attribute {
  constructor(name, times, level) {
    this.name = name;
    this.times = times;
    this.level = level;
  }
}

const entities = [];

const attributes = new Attribute("MIS 221", "3:00", "Undergrad");

const entity1 = new Entity("1", attributes);

entities.push(entity1);

const entity2 = console.log(entity1);

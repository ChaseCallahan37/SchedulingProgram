class Event {
  constructor(title = "", attributes = []) {
    this.title = title;
    this.attributes = attributes;
  }
}

const events = [];

const mis221 = new Event("MIS 221", [
  {
    title: "Info",
    type: "textarea",
    placement: "body",
    value: "This is what the class is about",
  },
  {
    title: "Resources",
    placement: "body",
    type: "label",
    value: "Luke",
  },
  {
    title: "Professor",
    placement: "footer",
    type: "h1",
    value: "Jeff Lucas",
  },
]);

events.push(mis221);

export default {
  events: events,
};

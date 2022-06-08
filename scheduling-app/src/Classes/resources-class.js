class Resource {
    constructor(type, name, availability, constraints){
        this.type = type  // ta or instructor
        this.name = name  // name of the individual
        this.availability = availability  // time and day they are able to teach/ta
        this.constraints = constraints  // classes the individual is qualified to teach/ta
    }
}

export default Resource
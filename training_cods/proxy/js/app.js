let user = {
  id: 1,
  firstName: "Amin",
  lastName: "Saaedi Rad",
  type: "user",
};

user = new Proxy(user, {
  get: function (target, property) {
    console.log("Target:", target);
    console.log("Property:", property);
    return property in target ? target[property] : null;
  },

  set: function (target, property, value) {
    console.log("target:", target);
    console.log("property:", property);
    console.log("value:", value);

    if (property === "age" && value < 18) {
      value = 18;
    }

    if (
      property === "type" &&
      ["user", "admin", "author", "teacher"].includes(value.toLowerCase())
    ) {
      target[property] = value;
    } else {
      throw new Error("This Value Is Not Valid :((");
    }

    target[property] = value;
  },
});

user.type = "Admin";

console.log(user.type);

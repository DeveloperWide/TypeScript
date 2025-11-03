// Enums allow us to define a set of named constants
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
var role = Role.ADMIN;
console.log("Assigned role is: ".concat(role));

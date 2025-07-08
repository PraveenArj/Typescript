var Organisation = /** @class */ (function () {
    function Organisation(name, contact, address) {
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    Organisation.prototype.personDetails = function () {
        return "Name:".concat(this.pName, " Contact:").concat(this.pContact, " Address:").concat(this.pAddress);
    };
    return Organisation;
}());
var OrganisationObj = new Organisation("varun", 12345, "Pune");
console.log(OrganisationObj.personDetails());

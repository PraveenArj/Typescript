
class User {
    private userid: string = "admin@gmail.com";
    private upass: string = "0123";

    get _userid() {
        return this.userid;
    }
    set _userid(val: any) {
        this.userid = val;
    }
    get _upass() {
        return this.upass;
    }
    set _upass(val: any) {
        this.upass = val;
    }

    userDetails(){
        return`UserId:${this.userid} Password:${this.upass}`
    }
}

let userObj = new User();
console.log(userObj._userid);
userObj._userid = "king@gmail.com"
console.log(userObj._userid);

console.log(userObj._upass)
userObj._upass = "1234"
console.log(userObj._upass)
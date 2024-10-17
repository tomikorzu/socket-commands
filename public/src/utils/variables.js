import { userAlert } from "./mainFunctions.js";

export class User {
  constructor(username, email, password, fullname) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.fullname = fullname;
  }

  verifyUserName(username) {
    switch (true) {
      case !/^.{4,}$/.test(username):
        userAlert("Alert", "Username must be at least 4 characters long");
        return false;
      case !/^\S+$/.test(username):
        userAlert("Alert", "Username cannot contain spaces");
        return false;
      case !/^.{1,20}$/.test(username):
        userAlert(
          "Alert",
          "Username is too long, must be less than 20 characters"
        );
        return false;
      case !/^[A-Za-z][A-Za-z0-9_\.]*$/.test(username):
        userAlert("Alert", "Username cannot start with a number");
        return false;
      case /^(?!\d+$)[A-Za-z0-9_\.]+$/.test(username) === false:
        userAlert("Alert", "Username cannot contain only numbers");
        return false;
      default:
        return true;
    }
  }

  verifyFullName(fullname) {
    switch (true) {
      case !/^.{4,}$/.test(fullname):
        userAlert("Alert", "Full Name must be at least 4 characters long");
        return false;
      case !/^[A-Za-z\s]+$/.test(fullname):
        userAlert(
          "Alert",
          "Full Name cannot contain numbers or special characters"
        );
        return false;
      case !/^.{1,50}$/.test(fullname):
        userAlert("Alert", "Full Name must not exceed 50 characters");
        return false;
      case !/^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(fullname):
        userAlert("Alert", "Full Name must consist of at least two words");
        return false;
      case !/^[A-Za-z]+\s[A-Za-z]+$/.test(fullname):
        userAlert("Alert", "Full Name must not have extra spaces");
        return false;
      default:
        return true;
    }
  }

  verifyEmail(email) {
    switch (true) {
      case !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email):
        userAlert("Alert", "Invalid email format");
        return false;
      case !/^\S+$/.test(email):
        userAlert("Alert", "Email cannot contain spaces");
        return false;
      default:
        return true;
    }
  }

  verifyPassword(password) {
    switch (true) {
      case !/^.{8,}$/.test(password):
        userAlert("Alert", "Password must be at least 8 characters long");
        return false;
      case !/^(?=.*[A-Z]).+$/.test(password):
        userAlert(
          "Alert",
          "Password must contain at least one uppercase letter"
        );
        return false;
      case !/^\S+$/.test(password):
        userAlert("Alert", "Password cannot contain spaces");
        return false;
      default:
        return true;
    }
  }

  verifyAll() {
    if (
      !this.username.trim() ||
      !this.email.trim() ||
      !this.password.trim() ||
      !this.fullname.trim()
    ) {
      userAlert("Alert", "All fields are required");
      return false;
    }
    if (
      this.verifyUserName(this.username) &&
      this.verifyFullName(this.fullname) &&
      this.verifyEmail(this.email) &&
      this.verifyPassword(this.password)
    ) {
      return true;
    }
    return false;
  }
}

import config from "../conf/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //return userAccount;
        return this.login({ email, password });
      } else {
        throw new Error(
          "Account creation failed. No user account was returned."
        );
      }
    } catch (error) {
      console.error("Error creating user account:", error.message);
      throw error; // Re-throw the error after logging it
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Error Logging  user account:", error.message);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Error during logout:", error);
      throw error;
    }
  }
}
const authService = new AuthService();
export default authService;

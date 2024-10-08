/* eslint-disable no-useless-catch */
import config from '../config/config.js';
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

    /* we do not want any dependencies
    maybe we want to change appwrite, so it'll not be feasible to change in every portion of application
    hence, we create an async method createAccount
    */

    // sign-up
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // to find whether the user is currently logged-in or not
    async getCurrentUser() {
        try {
            // Attempt to retrieve the logged-in user's account information
            const user = await this.account.get();
            return user;
        } catch (error) {
            if (error.code === 401) {
                // Handle unauthorized user case
                console.log("User not authenticated. Returning null.");
                return null; // return null for unauthorized users
            } else {
                // If it's another error, throw it to handle elsewhere
                console.log("Appwrite service :: getCurrentUser :: error", error);
                throw error;
            }
        }
    }

    //logout
    async logout() {
        try {
            return await this.account.deleteSessions();
            // deleteSessions() - for deleting sessions from all the browsers that the user has logged in 
            // deleteSession() - for deleting session only from the current browser
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// AuthService - class
// authService - object
const authService = new AuthService();

export default authService;

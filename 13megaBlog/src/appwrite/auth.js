/* eslint-disable no-useless-catch */
import config from '../config/config.js';
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)

        this.account = new Account(this.client);
    }

    /* we do not want any depedencies
    maybe we want to change appwrite, so it'll not be feasible to change in every portion of application
    hence, we create an async method createAccount
     */

    // sign-up
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return this.login({email, password});
                
            } else{
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }

    // login
    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        } catch(error){
            throw error;
        }   
    }

    // to find whether the user is currently logged-in or not
    async getCurrentUSer() {
        try{
            return await this.account.get();
        } catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null; //if account not found or to prevent unnecessary error display
        // we can also use if-else block inside try block for the same purpose
    }

    //logout
    async logout(){
        try{
            return await this.account.deleteSessions();
            // deleteSessions() - for deleting sessions from all the browsers that the user has logged in 
            // deleteSession() - for deleting session only from the current browser
        } catch(error){
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// AuthService - class
// authService - object
const authService = new AuthService();

export default authService;

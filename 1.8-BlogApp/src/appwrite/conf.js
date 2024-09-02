import config from "../conf/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabase,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImg,
          userId,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error);
      //throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabase,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImg,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      //throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabase,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error);
      return false;
      //throw error;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabase,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      return false;
      //throw error;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabase,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: listDocument :: error", error);
      return false;
      //throw error;
    }
  }

  // file uploads

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }
  // getFilePreview(fileId) {
  //   return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  // }
  getFilePreview(fileId) {
    if (!fileId) {
      console.error("File ID is missing or invalid");
      return "default-image-url"; // Provide a fallback image URL
    }
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;

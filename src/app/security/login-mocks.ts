import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "sitaram",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    canAccessProducts: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: "guest",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    canAccessProducts: true,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];

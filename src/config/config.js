import { userCredential } from "../constants/common";
import { getFromLocalStorage } from "../helpers/local-storage";

export const BASE_URL = "http://localhost:5000/api/v1";
export const token = getFromLocalStorage(userCredential)?.token;
export const role = getFromLocalStorage(userCredential)?.role;

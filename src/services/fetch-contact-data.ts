import firebase from "firebase/app";

import { IAnyRequestResponse } from "./interfaces";

/** Service qui récupère les données de contact en base de donnée */
export const getContactData = async (): Promise<IAnyRequestResponse> => {
  try {
    const contactSnapshot = await firebase
      .firestore()
      .collection("/contact")
      .doc("Hf2UoFByxavrSIGjkHyN")
      .get();

    const response: IAnyRequestResponse = {
      status: "SUCCESS",
      data: contactSnapshot.data()
    };

    return response;
  } catch (error) {
    const response: IAnyRequestResponse = {
      status: "ERROR",
      error
    };

    return response;
  }
};

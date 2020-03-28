import firebase from "firebase/app";

import { IAnyRequestResponse } from "./interfaces";

/** Service qui récupère les données du cv en base de donnée */
export const fetchCvData = async (): Promise<IAnyRequestResponse> => {
  try {
    const contactSnapshot = await firebase
      .firestore()
      .collection("/cv")
      .doc("QpPHG72A6lvq6B9ohlSG")
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

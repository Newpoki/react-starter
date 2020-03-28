/** Type possible pour l'état d'une requête */
export type IAnyRequestStatus = "NO_CALL" | "ERROR" | "SUCCESS" | "PENDING";

export interface IAnyRequestResponse {
  status: "SUCCESS" | "ERROR";
  error?: any;
  data?: any;
}

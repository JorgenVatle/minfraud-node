export default interface MinFraudResponse {

    /**
     * This is the minFraud ID, a UUID that identifies the minFraud response. Use this ID to search your minFraud
     * logs or when making support requests to MaxMind.
     */
    id: string;

    /**
     * This field contains the risk score, from 0.01 to 99. A higher score indicates a higher risk of fraud. For
     * example, a score of 20 indicates a 20% chance that a transaction is fraudulent. We never return a risk score
     * of 0, since all transactions have the possibility of being fraudulent. Likewise we never return a risk score
     * of 100.
     */
    risk_score: number;

    /**
     * The approximate US dollar value of the funds remaining on your MaxMind account.
     */
    funds_remaining: number;

    /**
     * The approximate number of queries remaining for the service before your account runs out of funds.
     */
    queries_remaining: number;

    /**
     * This array contains warning objects detailing issues with the request that was sent such as invalid or
     * unknown inputs. It is highly recommended that you check this array for issues when integrating the web service.
     */
    warnings: any[];

}
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

/**
 * IP Address
 *
 * @link https://dev.maxmind.com/minfraud/#IP_Address_ip_address
 */
export interface IpAddress {

    /**
     * This field contains the risk associated with the IP address. The value ranges from 0.01 to 99. A higher score
     * indicates a higher risk.
     */
    risk: number;

    country?: {

        /**
         * This value is true if the IP country is high risk and false if the country is not high risk. If the IP
         * country could not be identified, the key will not be present.
         */
        is_high_risk: boolean;

    }

    location?: {

        /**
         * The date and time of the transaction in the time zone associated with the IP address. The value is
         * formatted according to RFC 3339. For instance, the local time in Boston might be returned as
         * 2015-04-27T19:17:24-04:00.
         */
        local_time: string;

    }
}
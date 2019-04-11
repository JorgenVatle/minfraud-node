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
    warnings: Warning[];

}

/**
 * Warning object
 *
 * @link https://dev.maxmind.com/minfraud/#Warning
 */
export interface Warning {

    /**
     * This value is a machine-readable code identifying the warning. Although more codes may be added in the future.
     */
    code: 'BILLING_CITY_NOT_FOUND'      // the billing city could not be found in our database.
        | 'BILLING_COUNTRY_MISSING'     // billing address information was provided without providing a billing country.
        | 'BILLING_COUNTRY_NOT_FOUND'   // the billing country could not be found in our database.
        | 'BILLING_POSTAL_NOT_FOUND'    // the billing postal could not be found in our database.
        | 'INPUT_INVALID'               // the value associated with the key does not meet the required constraints, e.g., “United States” in a field that requires a two-letter country code.
        | 'INPUT_UNKNOWN'               // an unknown key was encountered in the request body.
        | 'IP_ADDRESS_NOT_FOUND'        // the IP address could not be geolocated.
        | 'SHIPPING_CITY_NOT_FOUND'     // the shipping city could not be found in our database.
        | 'SHIPPING_COUNTRY_MISSING'    // shipping address information was provided without providing a shipping country.
        | 'SHIPPING_COUNTRY_NOT_FOUND'  // the shipping country could not be found in our database.
        | 'SHIPPING_POSTAL_NOT_FOUND'   // the shipping postal could not be found in our database.

    /**
     * This field provides a human-readable explanation of the warning. The description may change at any time and
     * should not be matched against.
     */
    warning: string;

    /**
     * A JSON Pointer to the input field that the warning is associated with. For instance, if the warning was about
     * the billing city, this would be /billing/city. If it was for the price in the second shopping cart item, it
     * would be /shopping_cart/1/price
     */
    input_pointer: string;

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

/**
 * Credit Card Issuer object
 *
 * This is a sub-object of credit_card that contains information related to the issuer of the card.
 *
 * @link https://dev.maxmind.com/minfraud/#Credit_Card_Issuer_credit_cardissuer
 */
export interface CreditCardIssuer {

    /**
     * The name of the bank which issued the credit card.
     */
    name: string;

    /**
     * This field is true if the name matches the name provided in the request for the card issuer. It is false if
     * the name does not match. The field is not included if either no name or issuer ID number (IIN) is provided in
     * the request or if MaxMind does not have a name associated with the IIN.
     */
    matches_provided_name: boolean;

    /**
     * The phone number of the bank which issued the credit card. In some cases the phone number we return may be
     * out of date.
     */
    phone_number: string;

    /**
     * This field is true if the phone number matches the number provided in the request for the card issuer. It is
     * false if the number does not match. The field is not included if either no phone number or issuer ID number
     * (IIN) is provided in the request or if MaxMind does not have a phone number associated with the IIN.
     */
    matches_provided_phone_number: boolean;

}
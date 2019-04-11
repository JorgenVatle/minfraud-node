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
 * Credit Card field
 *
 * This object contains minFraud information related to the credit card. If an issuer ID number (IIN) was not
 * provided in the request, this object will not be present in the response.
 *
 * @link https://dev.maxmind.com/minfraud/#Credit_Card_credit_card-2
 */
export interface CreditCard {

    /**
     * This field contains a JSON object with information relating to the credit card issuer.
     */
    issuer: CreditCardIssuer;

    /**
     * The card brand, such as “Visa”, “Discover”, “American Express”, etc.
     */
    brand: string;

    /**
     * The two letter ISO 3166-1 alpha-2 country code associated with the location of the majority of customers
     * using this credit card as determined by their billing address. In cases where the location of customers is
     * highly mixed, this defaults to the country of the bank issuing the card.
     */
    country: string;

    /**
     * This field is true if the country of the billing address matches the country of the majority of customers
     * using that IIN. It is false if both countries are available but do match. If one or both of the countries are
     * missing, the key will not be present. In cases where the location of customers is highly mixed, the match is
     * to the country of the bank issuing the card.
     */
    is_issued_in_billing_address_country: boolean;

    /**
     * This field is true if the issuer ID number is for a prepaid card. It is false if the issuer ID number is for
     * for a non-prepaid card. The key is only present when a valid issuer ID number has been provided.
     */
    is_prepaid: boolean;

    /**
     * This field is true if the issuer ID number is for a virtual card. It is false if the issuer ID number is for
     * a non-virtual card. The key is only present when a valid issuer ID number has been provided.
     */
    is_virtual: boolean;

    /**
     * The card type.
     */
    type: 'charge' | 'credit' | 'debit';
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

/**
 * Device field
 *
 * This object contains information about the device that MaxMind believes is associated with the IP address passed
 * in the request.
 *
 * @link https://dev.maxmind.com/minfraud/#Device_device-2
 */
export interface Device {

    /**
     * A number from 0.01 to 99 representing the confidence that the /device/id refers to a unique device as opposed
     * to a cluster of similar devices. A confidence of 0.01 indicates very low confidence that the device is
     * unique, whereas 99 indicates very high confidence.
     */
    confidence: number;

    /**
     * A UUID that MaxMind uses for the device associated with this IP address. Note that many devices cannot be
     * uniquely identified because they are too common (for example, all iPhones of a given model and OS release).
     * In these cases, the minFraud service will simply not return a UUID for that device. This is only available if
     * you are using the Device Tracking Add-on.
     */
    id: string;

    /**
     * The date and time of the last sighting of the device. The value is formatted according to RFC 3339.
     */
    last_seen: string;

    /**
     * The local date and time of the transaction in the time zone of the device. This is determined by using the
     * UTC offset associated with the device. The value is formatted according to RFC 3339.
     */
    local_time: string;

}

/**
 * Email field
 *
 * This object contains information about the email address passed in the request.
 *
 * @link https://dev.maxmind.com/minfraud/#Email_email-2
 */
export interface Email {

    /**
     * A date string (e.g. 2017-04-24) to identify the date an email address was first seen by MaxMind. This is
     * expressed using the ISO 8601 date format YYYY-MM-DD
     */
    first_seen: string;

    /**
     * This field is true if MaxMind believes that this email domain is for a free email provider such as Gmail or
     * Yahoo! Mail. It is false if the domain is not for a known free email provider. The key will only be present
     * if a valid email address or email domain is provided.
     */
    is_free: boolean;

    /**
     * This field is true if MaxMind believes that this email address is likely to be used for fraud. It is false if
     * MaxMind does not believe the address is used for fraud. The key will only be present if a valid email address
     * or email address hash is provided. Note that this is also factored into the overall risk_score in the
     * response as well.
     */
    is_high_risk: boolean;

}

/**
 * Shipping Address field
 *
 * This object contains minFraud response data associated with the shipping address. If the shipping address was not
 * provided in the request or could not be parsed, this object will not be present in the response.
 *
 * @link https://dev.maxmind.com/minfraud/#Shipping_Address_shipping_address
 */
export interface ShippingAddress {

    /**
     * This field is true if the shipping address is an address associated with fraudulent transactions. The field
     * is false when the address is not associated with increased risk. The key will only be present when a shipping
     * address is provided.
     */
    is_high_risk: boolean;

    /**
     * This field is true if the postal code provided with the address is in the city for the address. The field is
     * false when the postal code is not in the city. The key will only be present when a shipping postal code,
     * city, and country are provided.
     */
    is_postal_in_city: boolean;

    /**
     * The approximate latitude associated with the address.
     */
    latitude: number;

    /**
     * The approximate longitude associated with the address.
     */
    longitude: number;

    /**
     * The distance in kilometers from the address to the IP location.
     */
    distance_to_ip_location: number;

    /**
     * The distance in kilometers from the shipping address to billing address.
     */
    distance_to_billing_address: number;

    /**
     * This field is true if the shipping address is in the IP country. The field is false when the address is not
     * in the IP country. If the IP address could not be geolocated or no shipping address was provided, then the
     * field will not be included in the response.
     */
    is_in_ip_country: boolean;

}
/**
 * Device field
 * This object contains information about the device used in the transaction. (Required)
 *
 * @link https://dev.maxmind.com/minfraud/#Device_device
 */
export interface Device {
    /**
     * The IP address associated with the device used by the customer in the transaction. The IP address must be in
     * IPv4 or IPv6 presentation format, i.e., dotted-quad notation or the IPv6 hexadecimal-colon notation. (Required)
     */
    ip_address: string;

    /**
     * The HTTP “User-Agent” header of the browser used in the transaction.
     */
    user_agent: string;

    /**
     * The HTTP “Accept-Language” header of the device used in the transaction.
     */
    accept_language: string;

    /**
     * The number of seconds between the creation of the user’s session and the time of the transaction. Note that
     * session_age is not the duration of the current visit, but the time since the start of the first visit.
     * The value must be at least 0 and at most 1014-1.
     */
    session_age: string;

    /**
     * An ID that uniquely identifies a visitor’s session on the site.
     */
    session_id: string;
}

/**
 * Event field
 * This object contains general information related to the event being scored.
 *
 * @link https://dev.maxmind.com/minfraud/#Event_event
 */
export interface Event {

    /**
     * Your internal ID for the transaction. We can use this to locate a specific transaction in our logs, and it will
     * also show up in email alerts and notifications from us to you. No specific format is required.
     */
    transaction_id: string;

    /**
     * Your internal ID for the shop, affiliate, or merchant this order is coming from. Required for minFraud users who
     * are resellers, payment providers, gateways and affiliate networks. No specific format is required.
     */
    shop_id: string;

    /**
     * The date and time the event occurred. The string must be in the RFC 3339 date-time format,
     * e.g., “2012-04-12T23:20:50.52Z”. The time must be within the past 10 years. If this field is not in the
     * request, the current time will be used.
     */
    time: string;

    /**
     * Type of event that is being scored.
     */
    type: 'account_creation'
        | 'account_login'
        | 'email_change'
        | 'password_reset'
        | 'payout_change'
        | 'purchase'
        | 'recurring_purchase'
        | 'referral'
        | 'survey'
}

/**
 * Account field
 * This object contains account information for the end-user on the site where the event took place.
 *
 * @link https://dev.maxmind.com/minfraud/#Account_account
 */
export interface Account {

    /**
     * A unique user ID associated with the end-user in your system. If your system allows the login name for the
     * account to be changed, this should not be the login name for the account, but rather should be an internal
     * ID that does not change. This is not your MaxMind account ID. No specific format is required.
     */
    user_id: string;

    /**
     * An MD5 hash as a hexadecimal string of the username or login name associated with the account.
     */
    username_md5: string,

}
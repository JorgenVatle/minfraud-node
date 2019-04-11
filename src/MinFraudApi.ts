/**
 * Device field
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
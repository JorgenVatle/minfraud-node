export namespace MinFraudRequest {
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
        username_md5: string;

    }

    /**
     * Email field
     *
     * @link https://dev.maxmind.com/minfraud/#Email_email
     */
    export interface Email {

        /**
         * This field must be either be a valid email address or an MD5 of the lowercased email used in the transaction.
         * Important: if using the MD5 hash, please be sure to convert the email address to lowercase before calculating
         * its MD5 hash.
         */
        address: string;

        /**
         * The domain of the email address used in the transaction.
         */
        domain: string;
    }

    /**
     * Billing field
     *
     * @link https://dev.maxmind.com/minfraud/#Billing_billing
     */
    export interface Billing {

        /**
         * The first name of the end user as provided in their billing information.
         */
        first_name: string;

        /**
         * The last name of the end user as provided in their billing information.
         */
        last_name: string;

        /**
         * The company of the end user as provided in their billing information.
         */
        company: string;

        /**
         * The first line of the user’s billing address.
         */
        address: string;

        /**
         * The second line of the user’s billing address.
         */
        address_2: string;

        /**
         * The city of the user’s billing address.
         */
        city: string;

        /**
         * The ISO 3166-2 subdivision code for the user’s billing address.
         */
        region: string;

        /**
         * The two character ISO 3166-1 alpha-2 country code of the user’s billing address.
         */
        country: string;

        /**
         * The postal code of the user’s billing address.
         */
        postal: string;

        /**
         * The phone number without the country code for the user’s billing address. Punctuation characters will be
         * stripped. After stripping punctuation characters, the number must contain only digits.
         */
        phone_number: string;

        /**
         * The country code for phone number associated with the user’s billing address. If you provide this information
         * then you must provide at least one digit.
         */
        phone_country_code: string;
    }

    /**
     * Shipping field
     *
     * @link https://dev.maxmind.com/minfraud/#Shipping_shipping
     */
    export interface Shipping extends Billing {

        /**
         * The shipping delivery speed for the order
         */
        delivery_speed: 'same_day' | 'overnight' | 'expedited' | 'standard';

    }

    /**
     * Payment field
     *
     * @link https://dev.maxmind.com/minfraud/#Payment_payment
     */
    export interface Payment {

        /**
         * The payment processor used for the transaction.
         */
        processor: 'adyen'
            | 'altapay'
            | 'amazon_payments'
            | 'american_express_payment_gateway'
            | 'authorizenet'
            | 'balanced'
            | 'beanstream'
            | 'bluepay'
            | 'bluesnap'
            | 'bpoint'
            | 'braintree'
            | 'ccavenue'
            | 'ccnow'
            | 'chase_paymentech'
            | 'checkout_com'
            | 'cielo'
            | 'collector'
            | 'commdoo'
            | 'compropago'
            | 'concept_payments'
            | 'conekta'
            | 'ct_payments'
            | 'cuentadigital'
            | 'curopayments'
            | 'cybersource'
            | 'dalenys'
            | 'dalpay'
            | 'datacash'
            | 'dibs'
            | 'digital_river'
            | 'ebs'
            | 'ecomm365'
            | 'elavon'
            | 'emerchantpay'
            | 'epay'
            | 'eprocessing_network'
            | 'eway'
            | 'exact'
            | 'first_data'
            | 'global_payments'
            | 'gocardless'
            | 'heartland'
            | 'hipay'
            | 'ingenico'
            | 'internetsecure'
            | 'intuit_quickbooks_payments'
            | 'iugu'
            | 'lemon_way'
            | 'mastercard_payment_gateway'
            | 'mercadopago'
            | 'merchant_esolutions'
            | 'mirjeh'
            | 'mollie'
            | 'moneris_solutions'
            | 'nmi'
            | 'oceanpayment'
            | 'oney'
            | 'openpaymx'
            | 'optimal_payments'
            | 'orangepay'
            | 'other'
            | 'pacnet_services'
            | 'payeezy'
            | 'payfast'
            | 'paygate'
            | 'paylike'
            | 'payment_express'
            | 'paymentwall'
            | 'payone'
            | 'paypal'
            | 'payplus'
            | 'paystation'
            | 'paytrace'
            | 'paytrail'
            | 'payture'
            | 'payu'
            | 'payulatam'
            | 'payway'
            | 'payza'
            | 'pinpayments'
            | 'posconnect'
            | 'princeton_payment_solutions'
            | 'psigate'
            | 'qiwi'
            | 'quickpay'
            | 'raberil'
            | 'rede'
            | 'redpagos'
            | 'rewardspay'
            | 'sagepay'
            | 'securetrading'
            | 'simplify_commerce'
            | 'skrill'
            | 'smartcoin'
            | 'smartdebit'
            | 'solidtrust_pay'
            | 'sps_decidir'
            | 'stripe'
            | 'synapsefi'
            | 'telerecargas'
            | 'towah'
            | 'transact_pro'
            | 'usa_epay'
            | 'vantiv'
            | 'verepay'
            | 'vericheck'
            | 'vindicia'
            | 'virtual_card_services'
            | 'vme'
            | 'vpos'
            | 'wirecard'
            | 'worldpay'

        /**
         * The authorization outcome from the payment processor. If the transaction has not yet been approved or denied, do not include this field.
         */
        was_authorized: boolean;

        /**
         * The decline code as provided by your payment processor. If the transaction was not declined, do not include this field.
         */
        decline_code: string;
    }

    /**
     * Order field
     *
     * @link https://dev.maxmind.com/minfraud/#Order_order
     */
    export interface Order {

        /**
         * The total order amount for the transaction before taxes and discounts. The value must be at least 0 and at most 1e14 – 1.
         */
        amount: number;

        /**
         * The ISO 4217 currency code for the currency used in the transaction.
         */
        currency: string;

        /**
         * The discount code applied to the transaction. If multiple discount codes were used, please separate them with a comma.
         */
        discount_code: string;

        /**
         * The ID of the affiliate where the order is coming from. No specific format is required.
         */
        affiliate_id: string;

        /**
         * The ID of the sub-affiliate where the order is coming from. No specific format is required.
         */
        subaffiliate_id: string;

        /**
         * The URI of the referring site for this order. Needs to be absolute and have a URI scheme such as https://
         */
        referrer_uri: string;

        /**
         * Whether order was marked as a gift by the purchaser.
         */
        is_gift: boolean;

        /**
         * Whether the purchaser included a gift message.
         */
        has_gift_message: boolean;
    }

    /**
     * Credit Card field
     *
     * @link https://dev.maxmind.com/minfraud/#Credit_Card_credit_card
     */
    export interface CreditCard {

        /**
         * The issuer ID number for the credit card. This is the first 6 digits of the credit card number. It
         * identifies the issuing bank.
         */
        issuer_id_number: string;

        /**
         * The last four digits of the credit card number.
         */
        last_4_digits: string;

        /**
         * A token uniquely identifying the card. The token should consist of non-space printable ASCII characters.
         * If the token is all digits, it must be more than 19 characters long. The token must not be a primary
         * account number (PAN) or a simple transformation of it. If you have a valid token that looks like a PAN
         * but is not one, you may prefix that token with a fixed string, e.g., token-.
         */
        token: string;

        /**
         * The name of the issuing bank as provided by the end user.
         */
        bank_name: string;

        /**
         * The phone country code for the issuing bank as provided by the end user. If you provide this information
         * then you must provide at least one digit.
         */
        bank_phone_country_code: string;

        /**
         * The phone number, without the country code, for the issuing bank as provided by the end user. Punctuation
         * characters will be stripped. After stripping punctuation characters, the number must contain only digits.
         */
        bank_phone_number: string;

        /**
         * The address verification system (AVS) check result, as returned to you by the credit card processor. The
         * minFraud service supports the standard AVS codes.
         */
        avs_result: string;

        /**
         * The card verification value (CVV) code as provided by the payment processor.
         */
        cvv_result: string;

    }

    /**
     * Shopping Cart field
     *
     * @link https://dev.maxmind.com/minfraud/#Shopping_Cart_shopping_cart
     */
    export type ShoppingCart = ShoppingCartItem[];

    /**
     * Shopping Cart item
     *
     * @link https://dev.maxmind.com/minfraud/#Shopping_Cart_Item
     */
    export interface ShoppingCartItem {

        /**
         * The category of the item.
         */
        category: string;

        /**
         * Your internal ID for the item. No specific format is required.
         */
        item_id: string;

        /**
         * The quantity of the item in the shopping cart. The value must be at least 0, at most 1014-1, and have no
         * fractional part.
         */
        quantity: number;

        /**
         * The per-unit price of this item in the shopping cart. This should use the same currency as the order
         * currency. The value must be at least 0 and at most 1e14 – 1.
         */
        price: number;

    }

    /**
     * Custom Inputs field
     *
     * @link https://dev.maxmind.com/minfraud/#Custom_Inputs_custom_inputs
     */
    export interface CustomInputs {

        /**
         * Your custom input field.
         *
         * @link https://support.maxmind.com/custom-inputs-guide/
         */
        [key: string]: string | number | boolean;

    }

}

/**
 * minFraud request body.
 */
export default interface RequestBody {
    device: MinFraudRequest.Device;
    event?: MinFraudRequest.Event;
    account?: MinFraudRequest.Account;
    email?: MinFraudRequest.Email;
    billing?: MinFraudRequest.Billing;
    shipping?: MinFraudRequest.Shipping;
    payment?: MinFraudRequest.Payment;
    order?: MinFraudRequest.Order;
    credit_card?: MinFraudRequest.CreditCard;
    shopping_cart?: MinFraudRequest.ShoppingCart;
    custom_inputs?: MinFraudRequest.CustomInputs;
}
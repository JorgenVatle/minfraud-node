import Axios, {AxiosInstance} from "axios";

interface MinFraudCredentials {
    accountId: string;
    license: string;
}

export default class MinFraudApi {

    /**
     * API client.
     */
    protected api: AxiosInstance;

    /**
     * minFraud Api constructor.
     */
    public constructor(credentials: MinFraudCredentials) {
        this.api = Axios.create({
            baseURL: 'https://minfraud.maxmind.com/minfraud/v2.0/',
            auth: {
                username: credentials.accountId,
                password: credentials.license,
            }
        });
    }

}
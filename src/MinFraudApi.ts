import Axios, {AxiosInstance} from "axios";
import MinFraudRequest from "./api/MinFraudRequest";
import MinFraudResponse from "./api/MinFraudResponse";

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

    /**
     * Request a minFraud score for the given data.
     *
     * @param data
     */
    public async score(data: MinFraudRequest): Promise<MinFraudResponse> {
        const { data: score } = await this.api.post('/score', data);

        return score;
    }

}
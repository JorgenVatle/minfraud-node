import Axios, {AxiosInstance} from "axios";
import MinFraudRequest from "./api/MinFraudRequest";
import MinFraudResponse, {MinFraudFactorsResponse, MinFraudInsightsResponse} from "./api/MinFraudResponse";

interface MinFraudCredentials {
    accountId: string;
    license: string;
}

export default class MinFraud {

    /**
     * API client.
     */
    protected client: AxiosInstance;

    /**
     * minFraud Api constructor.
     */
    public constructor(credentials: MinFraudCredentials) {
        this.client = Axios.create({
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
        const { data: score } = await this.client.post('/score', data);

        return score;
    }

    /**
     * Request minFraud insights for the given data.
     *
     * @param data
     */
    public async insight(data: MinFraudRequest): Promise<MinFraudInsightsResponse> {
        const { data: score } = await this.client.post('/insights', data);

        return score;
    }

    /**
     * Request minFraud factors for the given data.
     *
     * @param data
     */
    public async factor(data: MinFraudRequest): Promise<MinFraudFactorsResponse> {
        const { data: score } = await this.client.post('/factors', data);

        return score;
    }

}
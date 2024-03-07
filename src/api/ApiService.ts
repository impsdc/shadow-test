import axios, { AxiosInstance } from "axios";
import { ENV } from "../../env";
import type { Game } from "./Model/Game";

export class GetOptions {
    pageSize?: number;
    page?: number;
    search?: string;
    setURLParams() {
        const params = new URLSearchParams();
        this.pageSize !== undefined && params.set("page_size", `${this.pageSize}`);
        this.page !== undefined && params.set("page", `${this.page}`);
        this.search !== undefined && params.set("search", `${this.search}`);
    }
}

export default class ApiService {
    protected apiRequester: AxiosInstance;

    constructor() {
        this.apiRequester = this.buildApiRequester();
    }

    private buildApiRequester() {
        const apiRequester = axios.create({
            baseURL: `${ENV.NEXT_PUBLIC_API_URL}`,
            timeout: 1000,
        });
        apiRequester.interceptors.response.use(
            (response) => {
                return response.data.results ? response.data.results : response.data;
            },
            (error) => {
                throw error;
            },
        );
        apiRequester.interceptors.request.use(
            (config) => {
                config.params = {
                    ...config.params,
                    key: ENV.NEXT_PUBLIC_API_TOKEN,
                };
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
        return apiRequester;
    }

    getGame(options: GetOptions): Promise<Game[]> {
        options.setURLParams();
        return this.apiRequester.get("/games", {
            params: options,
        });
    }

    getGameById(id: number): Promise<Game> {
        return this.apiRequester.get(`/games/${id}`,);
    }

    getGifById(id: string) {
        return this.apiRequester.get(`/gifs/${id}`);
    }
}

export const apiService = new ApiService();

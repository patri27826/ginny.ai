/* tslint:disable */
/* eslint-disable */
/**
 * Server API - Account Service
 * The Restful APIs of Account Service.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 *
 * @export
 * @interface LoginUser200Response
 */
export interface LoginUser200Response {
    /**
     *
     * @type {string}
     * @memberof LoginUser200Response
     */
    'access_token'?: string;
}
/**
 *
 * @export
 * @interface LoginUserRequest
 */
export interface LoginUserRequest {
    /**
     *
     * @type {string}
     * @memberof LoginUserRequest
     */
    'id_token'?: string;
}

/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Login User
         * @param {LoginUserRequest} [loginUserRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: async (loginUserRequest?: LoginUserRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginUserRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Verify Access Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyToken: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user/authorized`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Login User
         * @param {LoginUserRequest} [loginUserRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginUser(loginUserRequest?: LoginUserRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginUser200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginUser(loginUserRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.loginUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Verify Access Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyToken(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyToken(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.verifyToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         *
         * @summary Login User
         * @param {LoginUserRequest} [loginUserRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser(loginUserRequest?: LoginUserRequest, options?: any): AxiosPromise<LoginUser200Response> {
            return localVarFp.loginUser(loginUserRequest, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Verify Access Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyToken(options?: any): AxiosPromise<void> {
            return localVarFp.verifyToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     *
     * @summary Login User
     * @param {LoginUserRequest} [loginUserRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public loginUser(loginUserRequest?: LoginUserRequest, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).loginUser(loginUserRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Verify Access Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public verifyToken(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).verifyToken(options).then((request) => request(this.axios, this.basePath));
    }
}

import { BaseAPI } from "./BaseAPI";
import { ILiquidityPosition, IPool, IPoolPrice } from "../types";
export interface IResPoolInfo {
    pool: IPool;
    pool_slot0: IPoolPrice;
}
export interface IResPoolMetadataNew {
    [pool: string]: IPool;
}
export interface IFarmV3 {
    address: string;
}
export interface IResFarmList {
    core_pools: Array<IFarmV3>;
    pagination: {
        next_key: null | string;
        total: string;
    };
}
export interface IResLiquidityPositionList {
    liquidity_positions: Array<ILiquidityPosition>;
}
export declare class SwapAPI extends BaseAPI {
    /**
     * find pool list by address array
     * @param addresses
     */
    apiPoolListByAddresses(addresses: Array<string>): Promise<{
        pool_slot0_aggregations: Array<IResPoolInfo>;
    }>;
    apiPoolMetadataByAddress(address: string): Promise<IResPoolMetadataNew>;
    apiPoolMetadataPriceByAddress(address: string): Promise<{
        pool_slot0: IPoolPrice;
    }>;
    apiLiquidityPositionById(tokenId: string): Promise<{
        liquidity_position: ILiquidityPosition;
    }>;
    apiLiquidityRewardsByIds(tokenIds: Array<string>): Promise<{
        liquidity_positions: Array<ILiquidityPosition>;
    }>;
    apiTickImagePath(tokenId: string): Promise<{
        uri: string;
    }>;
    apiActiveFarmList(): Promise<IResFarmList>;
    apiLiquidityPositionList(accountAddress: string): Promise<IResLiquidityPositionList>;
}

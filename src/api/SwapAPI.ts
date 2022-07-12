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
  activatingPool: Array<IFarmV3>;
  pagination: {
    next_key: null | string;
    total: string;
  };
}

export interface IResLiquidityPositionList {
  liquidity_positions: Array<ILiquidityPosition>;
}

export class SwapAPI extends BaseAPI {
  /**
   * find pool list by address array
   * @param addresses
   */
  public async apiPoolListByAddresses(
    addresses: Array<string>
  ): Promise<{ pool_slot0_aggregations: Array<IResPoolInfo> }> {
    return this.request.get<{ pool_slot0_aggregations: Array<IResPoolInfo> }>(
      `/sophon-labs/sophon/swap/pool_slot0_aggregations?${addresses.join("&")}`
    );
  }

  public async apiPoolMetadataByAddress(
    address: string
  ): Promise<IResPoolMetadataNew> {
    return this.request.get<IResPoolMetadataNew>(
      `/sophon-labs/sophon/swap/pools/${address}`
    );
  }

  public async apiPoolMetadataPriceByAddress(
    address: string
  ): Promise<{ pool_slot0: IPoolPrice }> {
    return this.request.get<{ pool_slot0: IPoolPrice }>(
      `/sophon-labs/sophon/swap/pools/${address}/slot0`
    );
  }

  public async apiLiquidityPositionById(
    tokenId: string
  ): Promise<{ liquidity_position: ILiquidityPosition }> {
    return this.request.get<{ liquidity_position: ILiquidityPosition }>(
      `/sophon-labs/sophon/swap/liquidity_positions/${tokenId}`
    );
  }

  public async apiLiquidityRewardsByIds(
    tokenIds: Array<string>
  ): Promise<{ liquidity_positions: Array<ILiquidityPosition> }> {
    return this.request.get<{ liquidity_positions: Array<ILiquidityPosition> }>(
      `/sophon-labs/sophon/swap/liquidity_position_by_ids?${tokenIds.join("&")}`
    );
  }

  public async apiTickImagePath(tokenId: string): Promise<{ uri: string }> {
    return this.request.get<{ uri: string }>(
      `/sophon-labs/sophon/swap/liquidity_positions/${tokenId}/token_uri`
    );
  }

  public async apiActiveFarmList(): Promise<IResFarmList> {
    return this.request.get<IResFarmList>(
      `/sophon-labs/sophon/swap/core_pools`
    );
  }

  public async apiLiquidityPositionList(
    accountAddress: string
  ): Promise<IResLiquidityPositionList> {
    return this.request.get<IResLiquidityPositionList>(
      `/sophon-labs/sophon/swap/liquidity_positions_owner/${accountAddress}`
    );
  }
}

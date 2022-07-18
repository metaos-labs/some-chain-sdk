import { MsgCreateRandSwapRewardConfig as MsgCreateRandSwapRewardConfig_pb, MsgCollectRandSwapReward as MsgCollectRandSwapReward_pb } from "../proto/pool-incentives/tx";
import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
export declare class MsgCreateRandSwapRewardConfig extends BaseMsg {
    protoMsg: MsgCreateRandSwapRewardConfig_pb;
    constructor(msg: MsgCreateRandSwapRewardConfig_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCreateRandSwapRewardConfig {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCreateRandSwapRewardConfig_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCreateRandSwapRewardConfig_pb;
        fromJSON(object: any): MsgCreateRandSwapRewardConfig_pb;
        toJSON(message: MsgCreateRandSwapRewardConfig_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            config?: {
                id?: string | number | import("long").Long | undefined;
                enabled?: boolean | undefined;
                intervalPeriod?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                mintable?: boolean | undefined;
                owner?: string | undefined;
                denom?: string | undefined;
                decimal?: number | undefined;
                totalReward?: string | undefined;
                subConfigs?: {
                    title?: string | undefined;
                    weight?: number | undefined;
                    numberOfReveal?: number | undefined;
                }[] | undefined;
                pools?: string[] | undefined;
            } | undefined;
        } & {
            creator?: string | undefined;
            config?: ({
                id?: string | number | import("long").Long | undefined;
                enabled?: boolean | undefined;
                intervalPeriod?: {
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } | undefined;
                mintable?: boolean | undefined;
                owner?: string | undefined;
                denom?: string | undefined;
                decimal?: number | undefined;
                totalReward?: string | undefined;
                subConfigs?: {
                    title?: string | undefined;
                    weight?: number | undefined;
                    numberOfReveal?: number | undefined;
                }[] | undefined;
                pools?: string[] | undefined;
            } & {
                id?: string | number | (import("long").Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | import("long").Long) => import("long").Long;
                    and: (other: string | number | import("long").Long) => import("long").Long;
                    compare: (other: string | number | import("long").Long) => number;
                    comp: (other: string | number | import("long").Long) => number;
                    divide: (divisor: string | number | import("long").Long) => import("long").Long;
                    div: (divisor: string | number | import("long").Long) => import("long").Long;
                    equals: (other: string | number | import("long").Long) => boolean;
                    eq: (other: string | number | import("long").Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | import("long").Long) => boolean;
                    gt: (other: string | number | import("long").Long) => boolean;
                    greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    gte: (other: string | number | import("long").Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    lessThan: (other: string | number | import("long").Long) => boolean;
                    lt: (other: string | number | import("long").Long) => boolean;
                    lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                    lte: (other: string | number | import("long").Long) => boolean;
                    modulo: (other: string | number | import("long").Long) => import("long").Long;
                    mod: (other: string | number | import("long").Long) => import("long").Long;
                    multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                    mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                    negate: () => import("long").Long;
                    neg: () => import("long").Long;
                    not: () => import("long").Long;
                    notEquals: (other: string | number | import("long").Long) => boolean;
                    neq: (other: string | number | import("long").Long) => boolean;
                    or: (other: string | number | import("long").Long) => import("long").Long;
                    shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                    shl: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                    shr: (numBits: number | import("long").Long) => import("long").Long;
                    shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                    shru: (numBits: number | import("long").Long) => import("long").Long;
                    subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => import("long").Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => import("long").Long;
                    xor: (other: string | number | import("long").Long) => import("long").Long;
                } & Record<Exclude<keyof I["config"]["id"], "high" | "low" | "unsigned" | "add" | "and" | "compare" | "comp" | "divide" | "div" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "sub" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toString" | "toUnsigned" | "xor">, never>) | undefined;
                enabled?: boolean | undefined;
                intervalPeriod?: ({
                    seconds?: string | number | import("long").Long | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | number | (import("long").Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | import("long").Long) => import("long").Long;
                        and: (other: string | number | import("long").Long) => import("long").Long;
                        compare: (other: string | number | import("long").Long) => number;
                        comp: (other: string | number | import("long").Long) => number;
                        divide: (divisor: string | number | import("long").Long) => import("long").Long;
                        div: (divisor: string | number | import("long").Long) => import("long").Long;
                        equals: (other: string | number | import("long").Long) => boolean;
                        eq: (other: string | number | import("long").Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | import("long").Long) => boolean;
                        gt: (other: string | number | import("long").Long) => boolean;
                        greaterThanOrEqual: (other: string | number | import("long").Long) => boolean;
                        gte: (other: string | number | import("long").Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        lessThan: (other: string | number | import("long").Long) => boolean;
                        lt: (other: string | number | import("long").Long) => boolean;
                        lessThanOrEqual: (other: string | number | import("long").Long) => boolean;
                        lte: (other: string | number | import("long").Long) => boolean;
                        modulo: (other: string | number | import("long").Long) => import("long").Long;
                        mod: (other: string | number | import("long").Long) => import("long").Long;
                        multiply: (multiplier: string | number | import("long").Long) => import("long").Long;
                        mul: (multiplier: string | number | import("long").Long) => import("long").Long;
                        negate: () => import("long").Long;
                        neg: () => import("long").Long;
                        not: () => import("long").Long;
                        notEquals: (other: string | number | import("long").Long) => boolean;
                        neq: (other: string | number | import("long").Long) => boolean;
                        or: (other: string | number | import("long").Long) => import("long").Long;
                        shiftLeft: (numBits: number | import("long").Long) => import("long").Long;
                        shl: (numBits: number | import("long").Long) => import("long").Long;
                        shiftRight: (numBits: number | import("long").Long) => import("long").Long;
                        shr: (numBits: number | import("long").Long) => import("long").Long;
                        shiftRightUnsigned: (numBits: number | import("long").Long) => import("long").Long;
                        shru: (numBits: number | import("long").Long) => import("long").Long;
                        subtract: (subtrahend: string | number | import("long").Long) => import("long").Long;
                        sub: (subtrahend: string | number | import("long").Long) => import("long").Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => import("long").Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => import("long").Long;
                        xor: (other: string | number | import("long").Long) => import("long").Long;
                    } & Record<Exclude<keyof I["config"]["intervalPeriod"]["seconds"], "high" | "low" | "unsigned" | "add" | "and" | "compare" | "comp" | "divide" | "div" | "equals" | "eq" | "getHighBits" | "getHighBitsUnsigned" | "getLowBits" | "getLowBitsUnsigned" | "getNumBitsAbs" | "greaterThan" | "gt" | "greaterThanOrEqual" | "gte" | "isEven" | "isNegative" | "isOdd" | "isPositive" | "isZero" | "lessThan" | "lt" | "lessThanOrEqual" | "lte" | "modulo" | "mod" | "multiply" | "mul" | "negate" | "neg" | "not" | "notEquals" | "neq" | "or" | "shiftLeft" | "shl" | "shiftRight" | "shr" | "shiftRightUnsigned" | "shru" | "subtract" | "sub" | "toInt" | "toNumber" | "toBytes" | "toBytesLE" | "toBytesBE" | "toSigned" | "toString" | "toUnsigned" | "xor">, never>) | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["config"]["intervalPeriod"], "seconds" | "nanos">, never>) | undefined;
                mintable?: boolean | undefined;
                owner?: string | undefined;
                denom?: string | undefined;
                decimal?: number | undefined;
                totalReward?: string | undefined;
                subConfigs?: ({
                    title?: string | undefined;
                    weight?: number | undefined;
                    numberOfReveal?: number | undefined;
                }[] & ({
                    title?: string | undefined;
                    weight?: number | undefined;
                    numberOfReveal?: number | undefined;
                } & {
                    title?: string | undefined;
                    weight?: number | undefined;
                    numberOfReveal?: number | undefined;
                } & Record<Exclude<keyof I["config"]["subConfigs"][number], "title" | "weight" | "numberOfReveal">, never>)[] & Record<Exclude<keyof I["config"]["subConfigs"], number | "toString" | "length" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
                pools?: (string[] & string[] & Record<Exclude<keyof I["config"]["pools"], number | "toString" | "length" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | "lastIndexOf" | "every" | "some" | "forEach" | "map" | "filter" | "reduce" | "reduceRight" | "find" | "findIndex" | "fill" | "copyWithin" | "entries" | "keys" | "values" | "includes" | "flatMap" | "flat" | "at">, never>) | undefined;
            } & Record<Exclude<keyof I["config"], "id" | "enabled" | "intervalPeriod" | "mintable" | "owner" | "denom" | "decimal" | "totalReward" | "subConfigs" | "pools">, never>) | undefined;
        } & Record<Exclude<keyof I, "creator" | "config">, never>>(object: I): MsgCreateRandSwapRewardConfig_pb;
    };
    interface Proto extends MsgCreateRandSwapRewardConfig_pb {
    }
}
export declare class MsgCollectRandSwapReward extends BaseMsg {
    protoMsg: MsgCollectRandSwapReward_pb;
    constructor(msg: MsgCollectRandSwapReward_pb);
    generateMessage(): EncodeObject;
}
export declare namespace MsgCollectRandSwapReward {
    const typeUrl: string;
    const Proto: {
        encode(message: MsgCollectRandSwapReward_pb, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgCollectRandSwapReward_pb;
        fromJSON(object: any): MsgCollectRandSwapReward_pb;
        toJSON(message: MsgCollectRandSwapReward_pb): unknown;
        fromPartial<I extends {
            creator?: string | undefined;
            denom?: string | undefined;
            recipient?: string | undefined;
        } & {
            creator?: string | undefined;
            denom?: string | undefined;
            recipient?: string | undefined;
        } & Record<Exclude<keyof I, "creator" | "denom" | "recipient">, never>>(object: I): MsgCollectRandSwapReward_pb;
    };
    interface Proto extends MsgCollectRandSwapReward_pb {
    }
}

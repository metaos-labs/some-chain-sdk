import { BaseMsg } from './BaseMsg';
import { MsgCreateValidator as MsgCreateValidator_pb, MsgEditValidator as MsgEditValidator_pb, MsgDelegate as MsgDelegate_pb, MsgBeginRedelegate as MsgBeginRedelegate_pb, MsgUndelegate as MsgUndelegate_pb } from "../proto/cosmos/staking/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
export declare class MsgCreateValidator extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgCreateValidator_pb;
    constructor(msg: MsgCreateValidator_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgEditValidator extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgEditValidator_pb;
    constructor(msg: MsgEditValidator_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgDelegate extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgDelegate_pb;
    constructor(msg: MsgDelegate_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgBeginRedelegate extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgBeginRedelegate_pb;
    constructor(msg: MsgBeginRedelegate_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgUndelegate extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgUndelegate_pb;
    constructor(msg: MsgUndelegate_pb);
    generateMessage(): EncodeObject;
}

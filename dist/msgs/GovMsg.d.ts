import { BaseMsg } from './BaseMsg';
import { MsgSubmitProposal as MsgSubmitProposal_pb, MsgVote as MsgVote_pb, MsgVoteWeighted as MsgVoteWeighted_pb, MsgDeposit as MsgDeposit_pb } from "../proto/cosmos/gov/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
export declare class MsgSubmitProposal extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgSubmitProposal_pb;
    constructor(msg: MsgSubmitProposal_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgDeposit extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgDeposit_pb;
    constructor(msg: MsgDeposit_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgVote extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgVote_pb;
    constructor(msg: MsgVote_pb);
    generateMessage(): EncodeObject;
}
export declare class MsgVoteWeighted extends BaseMsg {
    static TYPE_URL: string;
    protoMsg: MsgVoteWeighted_pb;
    constructor(msg: MsgVoteWeighted_pb);
    generateMessage(): EncodeObject;
}

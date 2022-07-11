import { BaseMsg } from './BaseMsg';
import {
  protobufPackage,
  MsgSubmitProposal as MsgSubmitProposal_pb,
  MsgVote as MsgVote_pb,
  MsgVoteWeighted as MsgVoteWeighted_pb,
  MsgDeposit as MsgDeposit_pb,
} from "../proto/cosmos/gov/v1beta1/tx";
import {EncodeObject} from "@cosmjs/proto-signing";

export class MsgSubmitProposal extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgSubmitProposal`;
  public protoMsg: MsgSubmitProposal_pb;
  constructor(msg: MsgSubmitProposal_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgSubmitProposal.TYPE_URL,
      value: MsgSubmitProposal_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgDeposit extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgDeposit`;
  public protoMsg: MsgDeposit_pb;
  constructor(msg: MsgDeposit_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgDeposit.TYPE_URL,
      value: MsgDeposit_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgVote extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgVote`;
  public protoMsg: MsgVote_pb;
  constructor(msg: MsgVote_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgVote.TYPE_URL,
      value: MsgVote_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgVoteWeighted extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgVoteWeighted`;
  public protoMsg: MsgVoteWeighted_pb;
  constructor(msg: MsgVoteWeighted_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgVoteWeighted.TYPE_URL,
      value: MsgVoteWeighted_pb.fromPartial(this.protoMsg),
    };
  }
}

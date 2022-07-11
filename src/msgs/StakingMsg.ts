import { BaseMsg } from './BaseMsg';
import {
  protobufPackage,
  MsgCreateValidator as MsgCreateValidator_pb,
  MsgEditValidator as MsgEditValidator_pb,
  MsgDelegate as MsgDelegate_pb,
  MsgBeginRedelegate as MsgBeginRedelegate_pb,
  MsgUndelegate as MsgUndelegate_pb
} from "../proto/cosmos/staking/v1beta1/tx";
import {EncodeObject} from "@cosmjs/proto-signing";

export class MsgCreateValidator extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgCreateValidator`;
  public protoMsg: MsgCreateValidator_pb;
  constructor(msg: MsgCreateValidator_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgCreateValidator.TYPE_URL,
      value: MsgCreateValidator_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgEditValidator extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgEditValidator`;
  public protoMsg: MsgEditValidator_pb;
  constructor(msg: MsgEditValidator_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgEditValidator.TYPE_URL,
      value: MsgEditValidator_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgDelegate extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgDelegate`;
  public protoMsg: MsgDelegate_pb;
  constructor(msg: MsgDelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgDelegate.TYPE_URL,
      value: MsgDelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgBeginRedelegate extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgBeginRedelegate`;
  public protoMsg: MsgBeginRedelegate_pb;
  constructor(msg: MsgBeginRedelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgBeginRedelegate.TYPE_URL,
      value: MsgBeginRedelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

export class MsgUndelegate extends BaseMsg {
  public static TYPE_URL = `/${protobufPackage}.MsgUndelegate`;
  public protoMsg: MsgUndelegate_pb;
  constructor(msg: MsgUndelegate_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgUndelegate.TYPE_URL,
      value: MsgUndelegate_pb.fromPartial(this.protoMsg),
    };
  }
}

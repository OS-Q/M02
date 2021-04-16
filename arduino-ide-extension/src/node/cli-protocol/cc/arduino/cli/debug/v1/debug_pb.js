// source: cc/arduino/cli/debug/v1/debug.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cc_arduino_cli_commands_v1_common_pb = require('../../../../../cc/arduino/cli/commands/v1/common_pb.js');
goog.object.extend(proto, cc_arduino_cli_commands_v1_common_pb);
goog.exportSymbol('proto.cc.arduino.cli.debug.v1.DebugConfigRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.debug.v1.DebugRequest', null, global);
goog.exportSymbol('proto.cc.arduino.cli.debug.v1.DebugResponse', null, global);
goog.exportSymbol('proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.debug.v1.DebugRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.debug.v1.DebugRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.debug.v1.DebugRequest.displayName = 'proto.cc.arduino.cli.debug.v1.DebugRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.debug.v1.DebugConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.debug.v1.DebugConfigRequest.displayName = 'proto.cc.arduino.cli.debug.v1.DebugConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.debug.v1.DebugResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.debug.v1.DebugResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.debug.v1.DebugResponse.displayName = 'proto.cc.arduino.cli.debug.v1.DebugResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.displayName = 'proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.debug.v1.DebugRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.debug.v1.DebugRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    debugRequest: (f = msg.getDebugRequest()) && proto.cc.arduino.cli.debug.v1.DebugConfigRequest.toObject(includeInstance, f),
    data: msg.getData_asB64(),
    sendInterrupt: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.debug.v1.DebugRequest;
  return proto.cc.arduino.cli.debug.v1.DebugRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cc.arduino.cli.debug.v1.DebugConfigRequest;
      reader.readMessage(value,proto.cc.arduino.cli.debug.v1.DebugConfigRequest.deserializeBinaryFromReader);
      msg.setDebugRequest(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendInterrupt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.debug.v1.DebugRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebugRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cc.arduino.cli.debug.v1.DebugConfigRequest.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSendInterrupt();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional DebugConfigRequest debug_request = 1;
 * @return {?proto.cc.arduino.cli.debug.v1.DebugConfigRequest}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.getDebugRequest = function() {
  return /** @type{?proto.cc.arduino.cli.debug.v1.DebugConfigRequest} */ (
    jspb.Message.getWrapperField(this, proto.cc.arduino.cli.debug.v1.DebugConfigRequest, 1));
};


/**
 * @param {?proto.cc.arduino.cli.debug.v1.DebugConfigRequest|undefined} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest} returns this
*/
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.setDebugRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.clearDebugRequest = function() {
  return this.setDebugRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.hasDebugRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool send_interrupt = 3;
 * @return {boolean}
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.getSendInterrupt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugRequest.prototype.setSendInterrupt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.debug.v1.DebugConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instance: (f = msg.getInstance()) && cc_arduino_cli_commands_v1_common_pb.Instance.toObject(includeInstance, f),
    fqbn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sketchPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, ""),
    interpreter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    importDir: jspb.Message.getFieldWithDefault(msg, 8, ""),
    programmer: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.debug.v1.DebugConfigRequest;
  return proto.cc.arduino.cli.debug.v1.DebugConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cc_arduino_cli_commands_v1_common_pb.Instance;
      reader.readMessage(value,cc_arduino_cli_commands_v1_common_pb.Instance.deserializeBinaryFromReader);
      msg.setInstance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqbn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSketchPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInterpreter(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImportDir(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgrammer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.debug.v1.DebugConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cc_arduino_cli_commands_v1_common_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getFqbn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSketchPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInterpreter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImportDir();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProgrammer();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional cc.arduino.cli.commands.v1.Instance instance = 1;
 * @return {?proto.cc.arduino.cli.commands.v1.Instance}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getInstance = function() {
  return /** @type{?proto.cc.arduino.cli.commands.v1.Instance} */ (
    jspb.Message.getWrapperField(this, cc_arduino_cli_commands_v1_common_pb.Instance, 1));
};


/**
 * @param {?proto.cc.arduino.cli.commands.v1.Instance|undefined} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
*/
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setInstance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.clearInstance = function() {
  return this.setInstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.hasInstance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fqbn = 2;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getFqbn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setFqbn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sketch_path = 3;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getSketchPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setSketchPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string port = 4;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string interpreter = 5;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getInterpreter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setInterpreter = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string import_dir = 8;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getImportDir = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setImportDir = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string programmer = 9;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.getProgrammer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugConfigRequest} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugConfigRequest.prototype.setProgrammer = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.debug.v1.DebugResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.debug.v1.DebugResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64(),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugResponse}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.debug.v1.DebugResponse;
  return proto.cc.arduino.cli.debug.v1.DebugResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.debug.v1.DebugResponse}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.debug.v1.DebugResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.debug.v1.DebugResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.DebugResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.DebugResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executable: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toolchain: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toolchainPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    toolchainPrefix: jspb.Message.getFieldWithDefault(msg, 4, ""),
    server: jspb.Message.getFieldWithDefault(msg, 5, ""),
    serverPath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    toolchainConfigurationMap: (f = msg.getToolchainConfigurationMap()) ? f.toObject(includeInstance, undefined) : [],
    serverConfigurationMap: (f = msg.getServerConfigurationMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse;
  return proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutable(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolchain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolchainPath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolchainPrefix(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerPath(value);
      break;
    case 7:
      var value = msg.getToolchainConfigurationMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = msg.getServerConfigurationMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutable();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToolchain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToolchainPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToolchainPrefix();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getServer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getServerPath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getToolchainConfigurationMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getServerConfigurationMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string executable = 1;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getExecutable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setExecutable = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string toolchain = 2;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getToolchain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setToolchain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string toolchain_path = 3;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getToolchainPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setToolchainPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string toolchain_prefix = 4;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getToolchainPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setToolchainPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string server = 5;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getServer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setServer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string server_path = 6;
 * @return {string}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getServerPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.setServerPath = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, string> toolchain_configuration = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getToolchainConfigurationMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.clearToolchainConfigurationMap = function() {
  this.getToolchainConfigurationMap().clear();
  return this;};


/**
 * map<string, string> server_configuration = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.getServerConfigurationMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse} returns this
 */
proto.cc.arduino.cli.debug.v1.GetDebugConfigResponse.prototype.clearServerConfigurationMap = function() {
  this.getServerConfigurationMap().clear();
  return this;};


goog.object.extend(exports, proto.cc.arduino.cli.debug.v1);

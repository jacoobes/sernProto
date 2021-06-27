/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.joe = (function() {
    
        /**
         * Properties of a joe.
         * @exports Ijoe
         * @interface Ijoe
         * @property {string|null} [hi] joe hi
         * @property {number|null} [num] joe num
         */
    
        /**
         * Constructs a new joe.
         * @exports joe
         * @classdesc Represents a joe.
         * @implements Ijoe
         * @constructor
         * @param {Ijoe=} [properties] Properties to set
         */
        function joe(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * joe hi.
         * @member {string} hi
         * @memberof joe
         * @instance
         */
        joe.prototype.hi = "";
    
        /**
         * joe num.
         * @member {number} num
         * @memberof joe
         * @instance
         */
        joe.prototype.num = 0;
    
        /**
         * Creates a new joe instance using the specified properties.
         * @function create
         * @memberof joe
         * @static
         * @param {Ijoe=} [properties] Properties to set
         * @returns {joe} joe instance
         */
        joe.create = function create(properties) {
            return new joe(properties);
        };
    
        /**
         * Encodes the specified joe message. Does not implicitly {@link joe.verify|verify} messages.
         * @function encode
         * @memberof joe
         * @static
         * @param {Ijoe} message joe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        joe.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hi != null && Object.hasOwnProperty.call(message, "hi"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.hi);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };
    
        /**
         * Encodes the specified joe message, length delimited. Does not implicitly {@link joe.verify|verify} messages.
         * @function encodeDelimited
         * @memberof joe
         * @static
         * @param {Ijoe} message joe message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        joe.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a joe message from the specified reader or buffer.
         * @function decode
         * @memberof joe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {joe} joe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        joe.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.joe();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hi = reader.string();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a joe message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof joe
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {joe} joe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        joe.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a joe message.
         * @function verify
         * @memberof joe
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        joe.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hi != null && message.hasOwnProperty("hi"))
                if (!$util.isString(message.hi))
                    return "hi: string expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            return null;
        };
    
        /**
         * Creates a joe message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof joe
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {joe} joe
         */
        joe.fromObject = function fromObject(object) {
            if (object instanceof $root.joe)
                return object;
            var message = new $root.joe();
            if (object.hi != null)
                message.hi = String(object.hi);
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a joe message. Also converts values to other types if specified.
         * @function toObject
         * @memberof joe
         * @static
         * @param {joe} message joe
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        joe.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hi = "";
                object.num = 0;
            }
            if (message.hi != null && message.hasOwnProperty("hi"))
                object.hi = message.hi;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };
    
        /**
         * Converts this joe to JSON.
         * @function toJSON
         * @memberof joe
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        joe.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return joe;
    })();

    return $root;
});

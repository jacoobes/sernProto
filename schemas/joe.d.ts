import * as $protobuf from "protobufjs";
/** Properties of a joe. */
export interface Ijoe {

    /** joe hi */
    hi?: (string|null);

    /** joe num */
    num?: (number|null);
}

/** Represents a joe. */
export class joe implements Ijoe {

    /**
     * Constructs a new joe.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ijoe);

    /** joe hi. */
    public hi: string;

    /** joe num. */
    public num: number;

    /**
     * Creates a new joe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns joe instance
     */
    public static create(properties?: Ijoe): joe;

    /**
     * Encodes the specified joe message. Does not implicitly {@link joe.verify|verify} messages.
     * @param message joe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ijoe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified joe message, length delimited. Does not implicitly {@link joe.verify|verify} messages.
     * @param message joe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ijoe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a joe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns joe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): joe;

    /**
     * Decodes a joe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns joe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): joe;

    /**
     * Verifies a joe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a joe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns joe
     */
    public static fromObject(object: { [k: string]: any }): joe;

    /**
     * Creates a plain object from a joe message. Also converts values to other types if specified.
     * @param message joe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: joe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this joe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

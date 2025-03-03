import {baseSchema} from "../../../../core/schema/base.schema.ts";
import {z} from "zod";

export const dealSchema = baseSchema.extend({
    partnerId: z.string(),
    propertyReference: z.string(),
    propertyWebLink: z.string(),
    propertyLocation: z.string(),
    propertyZipCode: z.string(),
    propertyPrice: z.number(),
    propertyStatus: z.string(),
})
import {baseSchema} from "../../../../core/schema/base.schema.ts";
import {z} from "zod";

export const leadSchema = baseSchema.extend({
    partnerId: z.string(),
    propertyReference: z.string(),
    propertyWebLink: z.string(),
    propertyAddress: z.string(),
    propertyLocation: z.string(),
    propertyZipCode: z.string(),
    propertyPrice: z.number(),
    commissionPercentage: z.number(),
    status: z.string(),
})
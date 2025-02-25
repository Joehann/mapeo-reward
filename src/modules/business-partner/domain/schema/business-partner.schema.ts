import {baseSchema} from "../../../../core/schema/base.schema.ts";
import {z} from "zod";

export const businessPartnerSchema = baseSchema.extend({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
    type: z.string(), //CGP, broker,...
    phone: z.string(),
    address: z.string(),
    postalCode: z.string(),
    city: z.string(),
    isEnabled: z.boolean(),
})
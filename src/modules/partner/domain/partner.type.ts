import {partnerSchema} from "./schema/partner.schema.ts";
import {z} from "zod";

export type Partner = z.infer<typeof partnerSchema>

export type PartnerToCreate = Omit<z.infer<typeof partnerSchema>, 'id' | 'createdAt' | 'updatedAt'>
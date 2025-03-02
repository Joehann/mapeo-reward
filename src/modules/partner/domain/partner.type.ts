import {partnerSchema} from "./schema/partner.schema.ts";
import {z} from "zod";

type PartnerType = {
    type: 'cgp' | 'broker' | 'private-finder'
    otherType: null
} | {
    type: 'other'
    otherType: string
}

export type Partner = Omit<z.infer<typeof partnerSchema>, 'type' | 'otherType'> & PartnerType
export type PartnerToCreate =
    Omit<z.infer<typeof partnerSchema>, 'id' | 'createdAt' | 'updatedAt' | 'type' | 'otherType'>
    & PartnerType
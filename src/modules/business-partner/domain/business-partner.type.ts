import {businessPartnerSchema} from "./schema/business-partner.schema.ts";
import {z} from "zod";

export type BusinessPartner = z.infer<typeof businessPartnerSchema>
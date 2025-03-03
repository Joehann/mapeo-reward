import {z} from "zod";
import {dealSchema} from "./schema/deal.schema.ts";

export type DealStatus = 'pending_signature' | 'signed' | 'pending_payment' | 'paid'

export type Deal = z.infer<typeof dealSchema>
export type DealToCreate = Omit<Deal, 'id' | 'createdAt' | 'updatedAt'>
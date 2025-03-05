import {z} from "zod";
import {leadSchema} from "./schema/lead.schema.ts";

export type LeadStatus = 'pending_signature' | 'signed' | 'pending_payment' | 'paid'

export type Lead = Omit<z.infer<typeof leadSchema>, 'status'> & { status: LeadStatus }
export type LeadToCreate = Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>
export type leadToDisplay = z.infer<typeof leadSchema>
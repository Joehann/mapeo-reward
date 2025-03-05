import {LeadStatus} from "../../domain/lead.type.ts";

export const mapLeadStatus = (status: LeadStatus): string => {
    const statusMap = {
        'pending_signature': 'En attente de signature',
        'signed': 'Signé',
        'pending_payment': 'En attente de paiement',
        'paid': 'Payé'
    }

    return statusMap[status]
}
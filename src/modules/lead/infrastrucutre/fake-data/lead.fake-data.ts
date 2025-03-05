import {Lead} from "../../domain/lead.type.ts";

export const leadsCollectionFake: Lead[] = [
    {
        id: "123e4567-e89b-12d3-a456-426614174012",
        partnerId: 'b9b1d9d4-9e22-45ef-8f5e-4d6dbd5b9f64',
        propertyReference: 'CR2181',
        propertyWebLink: 'https://www.mapeo-immo.com/fiches/4-40-26_57939978/4-chambres-vivable-de-plain-pied.html',
        propertyAddress: "120, rue de Noyon",
        propertyLocation: 'Carlepont',
        propertyZipCode: '60400',
        propertyPrice: 229000,
        commissionPercentage: 0.8,
        status: 'pending_signature',
        createdAt: new Date('2025/02/25'),
        updatedAt: new Date('2025/02/25')
    },
    {
        id: "4567e321-e89b-12d3-a456-426614174012",
        partnerId: '332164a8-ee2b-44b1-a9ac-3fb1ee256cfb',
        propertyReference: 'CR2182',
        propertyWebLink: 'https://www.mapeo-immo.com/fiches/4-40-26_57939978/4-chambres-vivable-de-plain-pied.html',
        propertyAddress: "58, boulevard Carnot",
        propertyLocation: 'Noyon',
        propertyZipCode: '60400',
        propertyPrice: 355000,
        commissionPercentage: 0.8,
        status: 'signed',
        createdAt: new Date('2025/02/25'),
        updatedAt: new Date('2025/02/25')
    }
]
import {BusinessPartner} from "../../domain/business-partner.type.ts";

export const businessPartnerFake: BusinessPartner = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    firstname: "John",
    lastname: "doe",
    email: "",
    type: "cgp",
    phone: "0123456789",
    address: "123, avenue des Champs-Elysées",
    postalCode: "75008",
    city: "Paris",
    isEnabled: true,
    createdAt: new Date('2025/02/25'),
    updatedAt: new Date('2025/02/25')
}

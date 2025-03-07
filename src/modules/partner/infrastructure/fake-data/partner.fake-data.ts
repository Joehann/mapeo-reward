import {Partner} from "../../domain/partner.type.ts";

export const partnerFake: Partner = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    firstname: "John",
    lastname: "doe",
    email: "",
    type: "cgp",
    otherType: null,
    phone: "0123456789",
    address: "123, avenue des Champs-Elysées",
    postalCode: "75008",
    city: "Paris",
    isEnabled: true,
    createdAt: new Date('2025/02/25'),
    updatedAt: new Date('2025/02/25')
}

export const partnersCollectionFake: Partner[] = [
    {
        id: "b9b1d9d4-9e22-45ef-8f5e-4d6dbd5b9f64",
        firstname: "Emilie",
        lastname: "Durand",
        email: "emilie.durand@example.com",
        type: "cgp",
        otherType: null,
        phone: "0123456789",
        address: "10 rue de la Paix",
        postalCode: "75002",
        city: "Paris",
        isEnabled: true,
        createdAt: new Date('2024/01/03'),
        updatedAt: new Date('2024/01/03')
    },
    {
        id: "a8b5b2a3-bded-499e-b89f-1e6b3b234876",
        firstname: "Lucas",
        lastname: "Moreau",
        email: "lucas.moreau@example.com",
        type: "broker",
        otherType: null,
        phone: "0123456789",
        address: "56 boulevard Saint-Germain",
        postalCode: "75005",
        city: "Paris",
        isEnabled: false,
        createdAt: new Date('2024/02/20'),
        updatedAt: new Date('2024/02/20')
    },
    {
        id: "c4b7f52c-aa6e-4a14-bd91-18f4f662b589",
        firstname: "Sophie",
        lastname: "Lefèvre",
        email: "sophie.lefevre@example.com",
        type: "private-finder",
        otherType: null,
        phone: "0123456789",
        address: "83 rue Lafayette",
        postalCode: "75009",
        city: "Paris",
        isEnabled: true,
        createdAt: new Date('2024/03/15'),
        updatedAt: new Date('2024/03/15')
    },
    {
        id: "d6e4f5b8-dacb-4edd-9f34-9a3b00fbb618",
        firstname: "Marc",
        lastname: "Petit",
        email: "",
        type: "other",
        otherType: "consultant",
        phone: "0123456789",
        address: "22 avenue Victor Hugo",
        postalCode: "75116",
        city: "Paris",
        isEnabled: false,
        createdAt: new Date('2024/04/25'),
        updatedAt: new Date('2024/04/25')
    },
    {
        id: "f7c8d9e0-eb1b-46d6-ac2d-abc10dbf5a1c",
        firstname: "Julie",
        lastname: "Girard",
        email: "julie.girard@example.com",
        type: "cgp",
        otherType: null,
        phone: "0123456789",
        address: "18 rue des Archives",
        postalCode: "75004",
        city: "Paris",
        isEnabled: true,
        createdAt: new Date('2024/05/07'),
        updatedAt: new Date('2024/05/07')
    },
    {
        id: "g8d9e0f1-ec2c-47e7-ad3e-bcd20ecg6b2d",
        firstname: "Théo",
        lastname: "Renard",
        email: "theo.renard@example.com",
        type: "broker",
        otherType: null,
        phone: "0123456789",
        address: "5 rue de la République",
        postalCode: "60000",
        city: "Beauvais",
        isEnabled: true,
        createdAt: new Date('2024/06/18'),
        updatedAt: new Date('2024/06/18')
    },
    {
        id: "h9e0f1g2-ed3d-48f8-ae4f-cde30fdh7c3e",
        firstname: "Léa",
        lastname: "Bernard",
        email: "lea.bernard@example.com",
        type: "cgp",
        otherType: null,
        phone: "0123456789",
        address: "32 avenue Jean Jaurès",
        postalCode: "60100",
        city: "Creil",
        isEnabled: false,
        createdAt: new Date('2024/07/29'),
        updatedAt: new Date('2024/07/29')
    },
    {
        id: "i0f2h3j4-fe4e-49g9-bf5g-def41gei8d4f",
        firstname: "Noah",
        lastname: "Dubois",
        email: "noah.dubois@example.com",
        type: "private-finder",
        otherType: null,
        phone: "0123456789",
        address: "47 boulevard Carnot",
        postalCode: "60200",
        city: "Compiègne",
        isEnabled: true,
        createdAt: new Date('2024/08/10'),
        updatedAt: new Date('2024/08/10')
    },
    {
        id: "j1g3i5k6-gf5f-5ah1-ci6h-efg52hj93i5j",
        firstname: "Mia",
        lastname: "Fontaine",
        email: "mia.fontaine@example.com",
        type: "other",
        otherType: "advisor",
        phone: "0123456789",
        address: "12 rue Pasteur",
        postalCode: "60300",
        city: "Senlis",
        isEnabled: false,
        createdAt: new Date('2024/09/12'),
        updatedAt: new Date('2024/09/12')
    },
    {
        id: "k2h4j6l8-hg6g-6bi2-dj7i-fgh63ik94j6k",
        firstname: "Gabriel",
        lastname: "Martin",
        email: "gabriel.martin@example.com",
        type: "cgp",
        otherType: null,
        phone: "0123456789",
        address: "9 place Saint-Pierre",
        postalCode: "60400",
        city: "Noyon",
        isEnabled: true,
        createdAt: new Date('2024/10/22'),
        updatedAt: new Date('2024/10/22')
    },
    {
        id: "l3i5k7m9-ih7h-7cj3-ek8j-ghi74jl05k7l",
        firstname: "Chloé",
        lastname: "Leroy",
        email: "chloe.leroy@example.com",
        type: "broker",
        otherType: null,
        phone: "0123456789",
        address: "78 rue Saint-Lazare",
        postalCode: "60500",
        city: "Chantilly",
        isEnabled: false,
        createdAt: new Date('2024/11/30'),
        updatedAt: new Date('2024/11/30')
    },
    {
        id: "m4j6l8n0-ji8i-8dk4-fl9k-ijk85km16l8m",
        firstname: "Ethan",
        lastname: "Rousseau",
        email: "ethan.rousseau@example.com",
        type: "private-finder",
        otherType: null,
        phone: "0123456789",
        address: "23 rue des Écoles",
        postalCode: "60600",
        city: "Clermont",
        isEnabled: true,
        createdAt: new Date('2024/12/15'),
        updatedAt: new Date('2024/12/15')
    },
];

import { Address } from "../addresses/address";

export type Physician = {    
    physicianId: string,
    title: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    emailAddress: string,
    website: string,
    address: Address   
};
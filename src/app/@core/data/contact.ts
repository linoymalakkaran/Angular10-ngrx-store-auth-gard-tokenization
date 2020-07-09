export interface Contact
{
    id:string,
    name:string;
    address1:string;
    address2:string;
    address3:string;
    phone:string;
    mobilephone:string;
    email:string;
    contacttype:ContactTypes
}

export enum ContactTypes {
    primary,
    secondory,
    office,
    other,
  };

import { Contact } from './contact';

export interface ServiceProvider {
    _id:string,
    name?: string;
    description?: string;
    contacts?:Contact[];
    website?:string,
    officehours?:string,
    publicservicehours?:string,
    category?:string,
    image?:string
}



export abstract class ServiceProverData {
  abstract getServiceProviders(): Promise<ServiceProvider[]>;
  abstract getServiceProviderById(id:string): Promise<ServiceProvider>;
}

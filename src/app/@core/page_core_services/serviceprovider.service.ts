import { ServiceProverData, ServiceProvider} from '../data/serviceprovider';
import { Injectable } from '@angular/core';
import { RestProvider } from './rest.service';

@Injectable()
export class ServiceProviderService extends ServiceProverData {
   serviceProviders : ServiceProvider[];
   constructor(private restserviceProvider:RestProvider)
   {
      super();
   }

   async getServiceProviders(): Promise<ServiceProvider[]> {
        if (this.serviceProviders !== undefined )
            return this.serviceProviders;

        this.serviceProviders = await this.restserviceProvider.get("atlpserviceprovider");
        return this.serviceProviders;
   }

   async getServiceProviderById(id:string): Promise<ServiceProvider> {
        if (this.serviceProviders === undefined ) 
            await this.getServiceProviders();
        return this.serviceProviders.find(x=>x._id == id);
   }
}

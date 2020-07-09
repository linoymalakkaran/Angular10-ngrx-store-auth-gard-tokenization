
import { Service,ServiceData } from '../data/services';
import { ServiceProviderService } from './serviceprovider.service';
import { ServiceProvider, ServiceProverData } from '../data/serviceprovider';
import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { Role } from '../data/role';
import { RestProvider } from './rest.service';

@Injectable()
export class DigitalServicesService extends ServiceData {
  

  addNewService(service: Service) : Promise<Service> {
    return new Promise((resolve,reject) => {
       this.restService.post("atlpservice",service).then((data:Service)=>{
          this.services.push(data) ;
          resolve(service);
       }).catch(err=>{reject()})

    });
  }

  async updateService(service: Service) : Promise<Service>{
    return new Promise((resolve,reject) => {
      this.restService.put("atlpservice/" + service._id,service).then((data:Service)=>{
        var foundIndex = this.services.findIndex(x => x._id == service._id);
        this.services[foundIndex] = service;
        resolve(service);
      }).catch(err=>{reject()})

   });
  
  }
  
  async deleteService(service: Service) : Promise<Service>{
    throw new Error("Method not implemented.");
  }

  serviceProviders:ServiceProvider[];
  customs: ServiceProvider;
  abudhabiPorts : ServiceProvider;
  adt : ServiceProvider;
  kizad : ServiceProvider;
  services: Service[];
  
  constructor(protected serviceProviderService: ServiceProviderService,
    protected categoryService : CategoryService,
    protected restService : RestProvider)
  {
    super(); 
  
  }

 

  async getServicesByProvider(id: string): Promise<Service[]> {
    return this.services
  }
  async getRecentServices(): Promise<Service[]> {
    return [this.services[3],this.services[0]]
  }
  async getFrequentlyUsedServices(): Promise<Service[]> {
    return [this.services[1],this.services[2]]
  } 

  async getServiceById(id:string) : Promise<Service>
  {
      var service = await this.restService.get('atlpservice',undefined,{_id:id});
      if (service.length > 0)
        return service[0];
      
      throw new Error("Not found");
  }

  async whoCanAccessToString(roles:Role[]) : Promise<string>
  {
        var result = ""
        roles.forEach((item)=>{
            result += result.length > 0 ? "," : ""  + item.name
        })
        return result
  }

  async getServices(fields?:any,query?:any): Promise<Service[]> {
    if (this.services !== undefined){ 
      return this.services  
    }
    
    this.services = await this.restService.get('atlpservice',fields,query);
    
    return this.services;
  }

  
}

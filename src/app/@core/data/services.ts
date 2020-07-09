import { ServiceProvider } from './serviceprovider';
import { Injectable } from '@angular/core';
import { Role } from './role';
import { ServiceForm, FormApp } from './formapp';
import { WorkFlow } from './workflow';

export interface Service {
  _id?:string;
  version?:string,
  name: string;
  description?: string;
  isformbased?:string;
  conditions?:string;
  useragreement?:string;
  alwaysagree?:boolean;
  process?:any[];
  documentsrequired?:Documents[];
  startform?:FormApp[];
  category?:any;
  provider?:ServiceProvider[];
  workflow?:WorkFlow[];
  image?: string;
  accent?:string;
  whocanaccess?:Role[];
  paidservice?:boolean;
  payafter?:boolean;
  paymentgateway?:string;
  fees?:Fees[]
  paymentchannels?:PaymentChannels[]
  termscondtions?:string;
}

export interface Process 
{
    _id:string;
    Step:number,
    description:string;
}

export interface Fees 
{
    _id:string;
    description:string;
    amount?:string
}
export interface Documents 
{
    _id:string;
    description:string;
    mandatory:boolean
}

export interface PaymentChannels 
{
    _id:string;
    description:string;
}

 @Injectable()
export abstract class ServiceData {
  
  abstract addNewService(service:Service) : Promise<Service>;;
  abstract updateService(service:Service) : Promise<Service>;;
  abstract deleteService(service:Service) : Promise<Service>;;
  abstract getServices(fields?:any,query?:any): Promise<Service[]>;
  abstract getServiceById(id:string): Promise<Service>;
  abstract getServicesByProvider(id:string): Promise<Service[]>;
  abstract getRecentServices(): Promise<Service[]>;
  abstract getFrequentlyUsedServices(): Promise<Service[]>;
  
}

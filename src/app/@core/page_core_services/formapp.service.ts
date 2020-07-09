
import { Injectable } from '@angular/core';
import { ServiceFormData, ServiceForm, FormApp } from '../data/formapp';
import { RestProvider } from './rest.service';
import { FormioAppConfig } from 'angular-formio';

@Injectable()
export class ServiceFormService extends ServiceFormData {

    forms: FormApp[]
    constructor(private restProvider: RestProvider) {
        super();
    }

    async addNewForm(form: FormApp): Promise<FormApp> {
        return new Promise((resolve, reject) => {
            this.restProvider.post("atlpform", form).then((data: FormApp) => {
                this.forms.push(data);
                resolve(data);
            }).catch(err => {
                reject(err);
            })

        });
    }
    async updateForm(form: FormApp): Promise<FormApp> {
        return new Promise((resolve, reject) => {
            this.restProvider.put("atlpform/" + form._id, form).then((data: FormApp) => {
                var foundIndex = this.forms.findIndex(x => x._id == data._id);
                this.forms[foundIndex] = data;
                resolve(data);
            }).catch(err => { 
                reject(err) ;
            })
        });
    }

    async getForms(fields?: any, query?: any): Promise<FormApp[]> {
        if (this.forms == undefined) {
            this.forms = await this.restProvider.get("atlpform", fields, query);
            return this.forms;
        }
        return this.forms;
    }
    async getFormById(id: any): Promise<FormApp> {
        var form: FormApp = await this.restProvider.get("atlpform/" + id);
        return form;
    }
}



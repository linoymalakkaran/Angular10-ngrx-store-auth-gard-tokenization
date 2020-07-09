import { CategoryData, Category } from '../data/categories';
import { Injectable } from '@angular/core';
import { RestProvider } from './rest.service';

@Injectable()
export class CategoryService extends CategoryData {

    constructor(private restProvider:RestProvider)
    { 
        super();
    }
    categories : Category[]

    async loadCategories()    
    {
        var result:any = await this.restProvider.get("atlpcategory");
        this.categories = result[0].value;
    }
    
    async getCategoryNode(id:string) : Promise<Category>
    {
        if (this.categories == undefined)
            await this.loadCategories();

         var i:number;
         var result:Category = null;
         for(i = 0; result == null && i < this.categories.length; i++){
            result = await this.searchTree(this.categories[i],id);
         }
         return result;
    }

    async searchTree(node : Category, id: string) : Promise<Category> {
        if(node.id == id){
             return node;
        }
        else if (node.children != null){
             var i: number;
             var result:Category = null;
             for(i = 0; result == null && i < node.children.length; i++){
                  result = await this.searchTree(node.children[i], id);
             }
             return result;
        }
        return null;
   }

    async getCategories(): Promise<Category[]> {
        if (this.categories == undefined)
           await this.loadCategories();
        return this.categories;

    }

    async getPath(id:string): Promise<string> {
        var node = await this.getCategoryNode(id);
        if (node == null) return "";
        var path = node.name;

        while (node.parent_id != null)
        {
           node = await this.getCategoryNode(node.parent_id);
           path =  node != null ? node.name + " / " + path : path;
        }

        return path;
    }
}
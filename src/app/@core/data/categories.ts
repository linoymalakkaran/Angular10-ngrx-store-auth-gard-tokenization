export interface Category
{
    id:string,
    name:string;
    parent_id:string;
    children?:Category[]
    expanded?:boolean;
}


export abstract class CategoryData {
    abstract getCategories(): Promise<Category[]>
    abstract getPath(id:string): Promise<string>;
  }
  
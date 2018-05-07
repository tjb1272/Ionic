import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  lists: any = [
    {id: 1, item: " "},
    {id: 2, item: " "},
    {id: 3, item: " "},
    {id: 4, item: " "},
    {id: 5, item: " "},
    {id: 6, item: " "},
    {id: 7, item: " "},
    {id: 8, item: " "},
    {id: 9, item: " "},
    {id: 10, item: " "},
    {id: 11, item: " "},
    {id: 12, item: " "},
    {id: 13, item: " "}
  ];

  itemSelected(lists: string) {
    console.log("Selected Item", lists);
  }

  constructor() {
    console.log('Hello DataProvider Provider');
  }
}

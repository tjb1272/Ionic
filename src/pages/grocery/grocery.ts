import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export class List {
  item: number;
  name: string;
}
const LISTS: List[] = [
    {item: 1, name: "Garlic"},
    {item: 2, name: "Tomato Juice"},
    {item: 3, name: "Italian Sausage"},
    {item: 4, name: "Basil"},
    {item: 5, name: "Cauliflower"},
    {item: 6, name: "Onions"},
    {item: 7, name: "Carrots"},
    {item: 8, name: "Potatoes"},
    {item: 9, name: "Broccoli"},
    {item: 10, name: "Tomatoes"},
    {item: 11, name: "Salt"}
  ];

@Component({
  selector: 'page-grocery',
  templateUrl: 'grocery.html'
})

export class GroceryPage {

  constructor(public navCtrl: NavController) {
  } 

  title = 'My Shopping List';
  lists = LISTS;
  selectedList: List;
  onSelect(list:List):void {
    this.selectedList = list;
  }
  list: List = {
    item: 1,
    name: "Enter Items"
  }
}
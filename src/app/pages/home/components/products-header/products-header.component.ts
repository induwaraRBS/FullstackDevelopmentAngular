import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.components.html' ,
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange =new EventEmitter<number>();
  sort = 'decs';
  itemShowCount = 12;


  constructor(){ }
  ngOnInit(): void {    
  }
  onSortUpdated(newSort:string):void{
    this.sort =newSort
  }
  onItemsUpdated(count:number):void{
    this.itemShowCount = count;
  }
  onColumnsUpdated(colsNum:number):void{
    this.columnCountChange.emit(colsNum);
  }
}

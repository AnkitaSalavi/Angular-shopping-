import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";



@Component({
    selector: 'app-shoppinglist',
    templateUrl : './ShoppingList.component.html'
})

export class ShoppingListComponent implements OnInit{
    
    ingredients: Ingredient[] = [
    new Ingredient('Apples','5'),
    new Ingredient('tomatoes','10')

    ];

    constructor(){ }

    ngOnInit(): void {
        
    }
}
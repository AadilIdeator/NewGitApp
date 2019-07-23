import {Component} from '@angular/core';

@Component({
    selector:'app-product',
    template:`
    <div class="wrapper">
    <nav id="sidebar" class="">
        <ul class="list-unstyled components">
        <button type="button" class="btn btn-info"
                (click) = "productActive = 'laptop'"
                >laptop</button>
                &nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-info"
                (click) = "productActive = 'Tv'"
                >Tv</button>&nbsp; &nbsp; &nbsp;
            
            <button type="button" class="btn btn-info"
                (click) = "productActive = 'Mobile'"
                >Mobile</button>&nbsp; &nbsp; &nbsp;
            
            <button type="button" class="btn btn-info"
                (click) = "productActive = 'Ac'"
                >Ac</button>
        </ul>
    </nav>

    <div [ngSwitch] = "productActive" *ngIf = "productActive">
        <div *ngSwitchCase = "'laptop'"><app-laptopcomponent></app-laptopcomponent></div>
        <div *ngSwitchCase = "'Tv'"><app-tvcomponent></app-tvcomponent></div>
        <div *ngSwitchCase = "'Mobile'"><app-mobilecomponent></app-mobilecomponent></div>
        <div *ngSwitchCase = "'Ac'"><app-accomponent></app-accomponent></div>
        <div *ngSwitchCase = "'Cart'"><app-Cartcomponent></app-Cartcomponent></div>
        <div *ngSwitchDefault>Data Not Found</div>    
    </div>

</div>
    
<div>
<button type="button" class="btn btn-info"
(click)="productActive = 'Cart'"
>Add New Device</button>

</div>
    
    `
})


export class ProductInfo{


    AddCart(){

    }


}

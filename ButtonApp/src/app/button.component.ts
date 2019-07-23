import { Component } from '@angular/core';

@Component({

    selector: 'app-button',
  template: `<button type="button" class="btn btn-secondary"
    [disabled]=Display1
  (click)="MaleAction()">male</button>
  &nbsp; &nbsp; &nbsp;  
  <button type="button" class="btn btn-secondary"
  [disabled]=Display2
   (click)="FemaleAction()">female</button>
   &nbsp; &nbsp; &nbsp;
   <button type="button" class="btn btn-secondary"
   (click)="reStart()"
   >restart</button>
  
  <div *ngIf = "isActiveMale">
<img src="../assets/images/2.jpg">
</div>


<div *ngIf = "isActiveFemale">
    <img src="../assets/images/3.jpg">
</div>

  
  
  
  `,
  styles: [`
  
  
  
  
  `]
})


export class ButtonCLcik {
  
  Display1:boolean;
  Display2:boolean;

  isActiveMale:boolean = false;
  isActiveFemale:boolean = false;
    MaleAction(){
      this.isActiveMale=!this.isActiveMale;
    this.isActiveFemale=!this.isActiveMale;
    this.Display1=true;
    this.Display2=false;

    }
    FemaleAction(){
      this.isActiveFemale=!this.isActiveFemale;
      this.isActiveMale=!this.isActiveFemale;
      this.Display2=true;
      this.Display1=false;

    }
    reStart(){
      this.isActiveFemale=false;
      this.isActiveMale=false;
    }
      
      
      
    constructor(){}
      
    }

    

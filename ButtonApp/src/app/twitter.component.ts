import { Component } from '@angular/core';

@Component({

    selector:'app-twitter',
    template:`

    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<div class="container" style="margin-top: 20px; margin-bottom: 20px;">
	<div class="row panel">
		<div class="col-md-4 bg_blur ">
    	    <a href="#" class="follow_btn hidden-xs"></a>
		</div>
        <div class="col-md-8  col-xs-12">
           <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="img-thumbnail picture hidden-xs" />
           <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="img-thumbnail visible-xs picture_mob" />
           <div class="header">
                <h1>Lorem Ipsum</h1>
                <h4>Web Developer</h4>
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</span>
           </div>
        </div>
    </div>   
    
	<div class="row nav">    
        <div class="col-md-4"></div>
        <div class="col-md-8 col-xs-12" style="margin: 0px;padding: 0px;">
            <div class="col-md-4 col-xs-4 well" >
            <i class="fa fa-weixin fa-lg"></i> 16</div>
            <div class="col-md-4 col-xs-4 well"><i class="fa" aria-hidden="true" title="Like"
            (click) = "ActionNew()"
            [class.fa-heart-o] = "!isActive"
            [class.fa-heart] = "isActive"
            [class.like]=10
            ></i>   {{like}} </div>
            <div class="col-md-4 col-xs-4 well"><i class="fa" title="ThumbsUp"
            (click)="ThumbsDown()"
            [class.fa-thumbs-o-up] = "!isThumbsUp"
            [class.fa-thumbs-down] = "isThumbsUP"
            ></i> {{thumbsUp}}</div>
        </div>
    </div>
</div>


    `,
    styles:[`



    *{
        font-family: 'Open Sans', sans-serif;
    }
    
    .well {
        margin-top:20px;
        background-color:#007FBD;
        border:2px solid #0077B2;
        text-align:center;
        cursor:pointer;
        font-size: 10px;
        padding: 10px;
        border-radius: 0px !important;
    }
    
    .well:hover {
        margin-top:-20px;
        background-color:#0077B2;
        border:2px solid #0077B2;
        text-align:center;
        cursor:pointer;
        font-size: 15px;
        padding: 15px;
        border-radius: 0px !important;
        border-bottom : 2px solid rgba(97, 203, 255, 0.65);
    }
    
    body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 7px;
    line-height: 1.42857143;
    color: #fff;
    background-color: #F1F1F1;
    }
    
    
    
   
    
    
  
    
    .header{
        color : #808080;
        margin-left:10%;
        margin-top:70px;
    }
    
    .picture{
        height:150px;
        width:150px;
        position:absolute;
        top: 75px;
        left:-75px;
    }
    
    .picture_mob{
        position: absolute;
        width: 1135%;
        left: 1135%;
        bottom: 70%;
    }
    
    .btn-style{
        color: #fff;
        background-color: #007FBE;
        border-color: #adadad;
        width: 13.3%;
    }
    
    .btn-style:hover {
        color: #333;
        background-color: #3D5DE0;
        border-color: #adadad;
        width: 13.3%;
       
    }
    
    
    @media (max-width: 767px) {
        .header{
            text-align : center;
        }
        
        
        
        .nav{
            margin-top : 30px;
        }
    }
    
    
    
    
    `]
})


export class upLinkLike{
    isActive:boolean = false;
    isThumbsUP:boolean = false;
    like:number = 10;
    thumbsUp:number = 26;

    upvote:number;
    twitter(){
        this.twitter=this.twitter
    }
    ActionNew(){
        this.isActive = !this.isActive;
        if(this.isActive){
            this.like += 1;
        }
        if(!this.isActive){
            this.like -= 1;
        }
        
    }
    ThumbsDown(){
        this.isThumbsUP = !this.isThumbsUP;
        if(this.isThumbsUP){
            this.thumbsUp -= 1;}
            if(!this.isThumbsUP){
                this.thumbsUp += 1;
            
            }
        }

    
    constructor(){}

}



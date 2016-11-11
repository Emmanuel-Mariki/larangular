import { Component,OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormGroup, FormControl,Validators, 
        FormBuilder,FormGroupDirective }from "@angular/forms";

import { Category } from './category';
import { CatService } from './cat.service';

@Component({
    selector:'prop-cat-list',
    templateUrl:'./larangular/resources/assets/typescript/categories/cat.list.html',
    styles:[`
        th, td
        {
            text-align:center;
        }
        #term
        {
            position:relative;
            top:3px;
            border-radius:3px;
        }
    `],
})

 /**
 * name
 */
export class CatListComponent implements OnInit {

    @Input() term:any ='';
    
    private selectedId: number;

    private errorMessage: string;

    private successMessage:string;

    private Active:boolean = true;
    
    private Categories: Category[];

    private CatFormFilter:FormGroup;

    @Input() ActionTitle:string = 'Category List'

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fomBuilder:FormBuilder,
        private CateogoryService:CatService,
    ) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    { 
        if(!this.id)
        {
            this.buildForm();
            this.getCategories();
        }
    }
    
    private buildForm(): void 
    {
        this.CatFormFilter = this.fomBuilder.group({
            term:this.fomBuilder.control(null,
            Validators.compose([Validators.required])
            )
        });
    }

    getCategories()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.CateogoryService.getCategories().subscribe(
                        Categories => this.Categories = Categories,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.CateogoryService.putCategory(id,body)
            .subscribe(
                Categories =>this.getCategories(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Category deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.CateogoryService.putCategory(id,body)
            .subscribe(
                Categories =>this.getCategories(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Category activated successfuly';
                }
            );
    }
}
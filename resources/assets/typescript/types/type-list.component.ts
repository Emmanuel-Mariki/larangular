import {Component ,OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import {TypeService} from './type.service'

import { PropertyTypes } from './type';

@Component({
    selector:'property-type-list',
    templateUrl:'./larangular/resources/assets/typescript/types/type-list.component.html',
    styles:[`
        th, td
        {
            text-align:center;
        }
        .btn,.title
        {
            margin-top:15px;
            margin-bottom:15px;
        }
    `]
})

export class TypeListComponent implements OnInit{

    private ActionTitle:string = 'Type list';
    
    private selectedId: number;

    private Active:boolean = true;
    
    private PropTypes: PropertyTypes[];

    errorMessage: string;

    successMessage:string;

    constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TypeService) {}

    private id:number = +this.route.snapshot.params['id'];

    ngOnInit()
    { 
        if(!this.id)
        {
            this.loadPropertyTypes();
        }
    }

    loadPropertyTypes()
    {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.service.getPropTypes().subscribe(
                        PropTypes => this.PropTypes = PropTypes,
                        error =>  this.errorMessage = <any>error  
                     );
        });
        
    }

    Deactivate(id)
    {
        let body = {'active':'0'};

        this.service.putPropType(id,body)
            .subscribe(
                PropTypes =>this.loadPropertyTypes(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};

        this.service.putPropType(id,body)
            .subscribe(
                PropTypes =>this.loadPropertyTypes(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type activated successfuly';
                }
            );
    }
}
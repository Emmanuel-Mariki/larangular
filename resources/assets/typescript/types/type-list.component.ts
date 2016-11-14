import {Component ,OnInit, EventEmitter} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PropertyTypes } from './type';

import {TypeService} from './type.service'

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
        .modal {
            text-align: center;
            padding: 0!important;
        }

        .modal:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -4px;
        }

        .modal-dialog {
            display: inline-block;
            text-align: left;
            vertical-align: middle;
        }
        .model-btn{
            position:relative;
            top:-8px;
        }
        .modal-header
        {
            background-color:#FFF6F4;
            color:#2EC3C9;
            font-weight:600;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .modal-footer
        {
            background-color:#FFF6F4;    
            padding-top: 0px;
            padding-bottom: 0px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .modal-body{
            color: red;
        }
    `],
    inputs:[],
    outputs:['viewChanged','Type','Id']
    
})

export class TypeListComponent implements OnInit{

    private Types:any;

    private DeleteId:number;

    private ActionTitle:string;

    public errorMessage: string;

    public successMessage:string;

    public ConfirmDeleteTitle:string;

    Type = new EventEmitter<any>();

    Id = new EventEmitter<number>();

    viewChanged = new EventEmitter<string>();

    constructor(
        private TypeService: TypeService
    ) {}

    ngOnInit()
    { 
        this.ActionTitle = 'Type list';
        this.loadPropertyTypes();
        //this.Type = this.Types
    }

    loadPropertyTypes()
    {
        this.TypeService.getPropTypes()
            .subscribe(
                Types => this.Types = Types,
                error =>  this.errorMessage = <any>error  
            );
    }

    ChangeView(event,type,id)
    {
        this.viewChanged.emit(event);
        this.Type.emit(type);
        this.Id.emit(id);
    }
    Deactivate(id)
    {
        let body = {'active':'0'};

        this.TypeService.putPropType(id,body)
            .subscribe(
                Types =>  this.loadPropertyTypes(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type deactivated successfuly';
                }
            );
    }

    Activate(id)
    {
        let body = {'active':'1'};
       
        this.TypeService.putPropType(id,body)
            .subscribe(
                Types =>  this.loadPropertyTypes(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type activated successfuly';
                }
            );
    }
    confirmDeletion(id, title)
    {
        this.ConfirmDeleteTitle = title;
        this.DeleteId = id;
    }

    DeleteType()
    {  
        this.TypeService.destroyPropType(this.DeleteId)
            .subscribe(
                Types =>  this.loadPropertyTypes(),
                error =>  this.errorMessage = <any>error,  
                ()=>{
                    this.successMessage = 'Property type deleted successfuly';
                }
            );
    }
}
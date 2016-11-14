import {Component,OnInit} from "@angular/core";

// import {TypeService} from './type.service'

@Component({
    selector:'property-type',
    template:`
        <property-type-list *ngIf="view =='list'"
                            (viewChanged)="changeView($event)"
                            (Id)="getId($event)"
                            (Type)="getProperty($event)">
        </property-type-list>
        <property-type-form *ngIf="view =='new'" 
                            (viewChanged)="changeView($event)" 
                            (NoficationMsg)="Notify($event)"
                            [TypeViewMode] ="view">
        </property-type-form>
        <property-type-form *ngIf="view =='edit'" 
                            (viewChanged)="changeView($event)" 
                            (NoficationMsg)="Notify($event)"
                            [IDPROPTYP]="id" [types]="Type"
                            [TypeViewMode] ="view">
        </property-type-form>
        <property-type-view *ngIf="view =='detail'"
                            (viewChanged)="changeView($event)" 
                            [IDPROPTYP]="id" [type]="Type">
        </property-type-view>
    `,
    styles:[`

    `]
})

export class TypeComponent implements OnInit{

    public Type:any;

    public id:number;

    public view:string;

    public PropTypes:any;

    public errorMessage: string;

    public successMessage:string;

    constructor(
        // private TypeService: TypeService
    ){}

    ngOnInit()
    { 
        this.view = 'list';
    }

    changeView(event)
    {
        this.view = event;
    }
    Notify(event)
    {
        this.successMessage = event;
    }
    getId(event)
    {
        this.id = event;
        console.log(this.id);
    }
    getProperty(event)
    {
        this.Type = event;
    }
}
import {Component} from "@angular/core";

@Component({
    selector:'property-type',
    template:`
        <property-type-list></property-type-list>
    `,
    styles:[`
        .panel-default>.panel-heading>.title
        {
            color: #663663;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 200%;
        }
        .panel-default>.panel-heading>.btn
        {
            position: relative;
            top: -5px;
            margin-left:5px;
        }
    `]
})

export class TypeComponent{

    public ActionTitle:string = 'Type list';

    // @Output() open: EventEmitter<any> = new EventEmitter();
    // @Output() close: EventEmitter<any> = new EventEmitter();

    // toggle() 
    // {
    //     this.visible = !this.visible;
    //     if (this.visible) 
    //     {
    //         this.ActionTitle ='Add property types'
    //         this.open.emit({newValue:this.visible});
    //     } 
    //     else 
    //     {
    //         this.ActionTitle = 'Type list';
    //         this.close.emit({newValue:this.visible});
    //     }
    // }
}
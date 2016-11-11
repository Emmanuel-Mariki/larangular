import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'LocationFilter',
})

export class LocationFilterPipe implements PipeTransform {
    transform(DataSet:any,term:any):any
    {
        if(DataSet === undefined) 
        {
            return DataSet;
        }
        else
        {
            return DataSet.filter(function(NewDataSet:any) {
                return NewDataSet.name.toLowerCase().includes(term.toLowerCase());
            });

        }
    }
}
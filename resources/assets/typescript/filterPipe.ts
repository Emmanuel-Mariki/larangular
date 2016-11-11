import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'filter',
})

export class FilterPipe implements PipeTransform {
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
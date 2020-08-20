import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any,term: String): any {
    console.log("inside pipe");
    console.log(term);
    if (values==null) {
      return null;
    }
    if(term === undefined)
      return  values;

    return values.filter(function(value){
      return value.front_end.toLowerCase().includes(term.toLowerCase()) || value.project_name.toLowerCase().includes(term.toLowerCase()) || value.back_end.toLowerCase().includes(term.toLowerCase());
    })
  
  }

}

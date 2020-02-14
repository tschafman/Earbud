import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'textSearch'
})
export class TextSearchPipe implements PipeTransform {
    // Array.reduce() method accumulates a list of objects which match the condition.
    // If query is null/undefined, return the original list
    transform(value: any, query: string, field: string): any {
        return query ? value.reduce((prev, next) => {
            if (next[field].toLowerCase().includes(query.toLowerCase())) { prev.push(next); }
            return prev;
        }, []) : value;
    }
}

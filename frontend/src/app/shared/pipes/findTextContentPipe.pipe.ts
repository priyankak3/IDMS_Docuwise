import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "findTextContent"})
export class FindTextContentPipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        // Implement your logic to transform or check the text content here
        // For example, you might want to trim or validate the content
        return value;
    }
}

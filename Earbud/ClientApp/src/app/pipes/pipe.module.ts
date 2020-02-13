import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TextSearchPipe } from './textSearch.pipe';

@NgModule({
    declarations:[TextSearchPipe],
    imports:[CommonModule],
    exports:[TextSearchPipe]
  })
  
export class SharedPipes{ }
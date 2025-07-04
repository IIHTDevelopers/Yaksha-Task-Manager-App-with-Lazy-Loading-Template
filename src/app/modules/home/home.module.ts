import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HomeComponent]
})
export class HomeModule { }

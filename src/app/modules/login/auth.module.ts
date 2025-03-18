import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [LoginComponent]
})
export class AuthModule { }

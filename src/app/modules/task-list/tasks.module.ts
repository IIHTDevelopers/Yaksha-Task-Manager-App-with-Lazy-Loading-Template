import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './../task-list/component/task-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TaskListComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [TaskListComponent]
})
export class TasksModule { }

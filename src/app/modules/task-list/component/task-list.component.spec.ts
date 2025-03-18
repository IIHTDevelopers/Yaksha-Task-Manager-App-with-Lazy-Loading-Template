import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { By } from '@angular/platform-browser';

describe('TaskListComponent', () => {
  let fixture: ComponentFixture<TaskListComponent>;
  let component: TaskListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent]  // Declare the component for testing
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection to update the view
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();  // Ensure the component is created successfully
    });

    it('should display the correct number of tasks', () => {
      const taskItems = fixture.debugElement.queryAll(By.css('ul li'));  // Query all <li> elements
      expect(taskItems.length).toBe(component.tasks.length);  // The number of <li> elements should match the length of the tasks array
    });

    it('should display each task correctly', () => {
      const taskItems = fixture.debugElement.queryAll(By.css('ul li'));  // Query all <li> elements
      taskItems.forEach((taskItem, index) => {
        expect(taskItem.nativeElement.textContent).toContain(component.tasks[index]);  // Ensure each <li> contains the correct task
      });
    });

    it('should display "Task 1" as the first task', () => {
      const firstTask = fixture.debugElement.query(By.css('ul li:first-child'));  // Query the first <li> element
      expect(firstTask.nativeElement.textContent).toContain('Task 1');  // Ensure "Task 1" is displayed in the first <li>
    });

    it('should display "Task 4" as the last task', () => {
      const lastTask = fixture.debugElement.query(By.css('ul li:last-child'));  // Query the last <li> element
      expect(lastTask.nativeElement.textContent).toContain('Task 4');  // Ensure "Task 4" is displayed in the last <li>
    });
  });
});

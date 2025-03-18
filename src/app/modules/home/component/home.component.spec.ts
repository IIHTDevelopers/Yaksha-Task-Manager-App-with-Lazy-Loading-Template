import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';  // Import RouterTestingModule for routing
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule]  // Import RouterTestingModule to simulate routerLink
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection to update the view
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();  // Ensure the component is created successfully
    });

    it('should display the title correctly', () => {
      const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(titleElement.textContent).toBe('Welcome to the Task Manager!');  // Check if the title is displayed correctly
    });

    it('should display the correct paragraph text', () => {
      const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(paragraphElement.textContent).toBe('This is the home page of the Task Manager app.');  // Check if the paragraph is displayed correctly
    });

    it('should have a routerLink to /tasks', () => {
      const tasksLink = fixture.debugElement.query(By.css('a[routerLink="/tasks"]')).nativeElement;
      expect(tasksLink).toBeTruthy();  // Check if the link to "/tasks" exists
    });

    it('should have a routerLink to /auth', () => {
      const authLink = fixture.debugElement.query(By.css('a[routerLink="/auth"]')).nativeElement;
      expect(authLink).toBeTruthy();  // Check if the link to "/auth" exists
    });
  });
});

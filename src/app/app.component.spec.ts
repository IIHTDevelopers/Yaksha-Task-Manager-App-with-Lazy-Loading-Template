import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/component/home.component';
import { LoginComponent } from './modules/login/component/login.component';
import { TaskListComponent } from './modules/task-list/component/task-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HomeComponent,
                LoginComponent,
                TaskListComponent
            ],
            imports: [RouterTestingModule]  // Import RouterTestingModule for routing
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('boundary', () => {
        it('should create the app', () => {
            expect(component).toBeTruthy();
        });

        it('should display Home component by default', () => {
            const homeElement = fixture.debugElement.query(By.css('app-home'));
            expect(homeElement).toBeTruthy();
        });

        it('should display Login component when Login button is clicked', () => {
            component.showLogin();
            fixture.detectChanges();
            const loginElement = fixture.debugElement.query(By.css('app-login'));
            expect(loginElement).toBeTruthy();
        });

        it('should display Tasks component when Tasks button is clicked', () => {
            component.showTasks();
            fixture.detectChanges();
            const tasksElement = fixture.debugElement.query(By.css('app-task-list'));
            expect(tasksElement).toBeTruthy();
        });

        it('should display Home component when Home button is clicked', () => {
            component.showHome();
            fixture.detectChanges();
            const homeElement = fixture.debugElement.query(By.css('app-home'));
            expect(homeElement).toBeTruthy();
        });

        it('should hide all components initially and display Home component', () => {
            component.currentView = 'home';  // Set default view
            fixture.detectChanges();

            const homeElement = fixture.debugElement.query(By.css('app-home'));
            const loginElement = fixture.debugElement.query(By.css('app-login'));
            const taskListElement = fixture.debugElement.query(By.css('app-task-list'));

            expect(homeElement).toBeTruthy();
            expect(loginElement).toBeFalsy();
            expect(taskListElement).toBeFalsy();
        });

        it('should hide the Home and Login components when Tasks button is clicked', () => {
            component.showTasks();
            fixture.detectChanges();

            const homeElement = fixture.debugElement.query(By.css('app-home'));
            const loginElement = fixture.debugElement.query(By.css('app-login'));
            const taskListElement = fixture.debugElement.query(By.css('app-task-list'));

            expect(homeElement).toBeFalsy();
            expect(loginElement).toBeFalsy();
            expect(taskListElement).toBeTruthy();
        });

        it('should hide the Home and Tasks components when Login button is clicked', () => {
            component.showLogin();
            fixture.detectChanges();

            const homeElement = fixture.debugElement.query(By.css('app-home'));
            const loginElement = fixture.debugElement.query(By.css('app-login'));
            const taskListElement = fixture.debugElement.query(By.css('app-task-list'));

            expect(homeElement).toBeFalsy();
            expect(loginElement).toBeTruthy();
            expect(taskListElement).toBeFalsy();
        });
    });
});

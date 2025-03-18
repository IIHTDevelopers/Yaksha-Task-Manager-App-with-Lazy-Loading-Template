import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way data binding
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]  // Import FormsModule for ngModel and form binding
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection to update the view
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();  // Ensure the component is created successfully
    });

    it('should display the login form with username and password inputs', () => {
      const usernameInput = fixture.debugElement.query(By.css('#username'));
      const passwordInput = fixture.debugElement.query(By.css('#password'));
      expect(usernameInput).toBeTruthy();  // Check if the username input exists
      expect(passwordInput).toBeTruthy();  // Check if the password input exists
    });

    it('should bind the username and password input fields to component properties', () => {
      const usernameInput = fixture.debugElement.query(By.css('#username')).nativeElement;
      const passwordInput = fixture.debugElement.query(By.css('#password')).nativeElement;

      // Set values to the input fields
      usernameInput.value = 'testuser';
      passwordInput.value = 'testpassword';

      // Trigger input event to update the model
      usernameInput.dispatchEvent(new Event('input'));
      passwordInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      // Verify that the component's properties have been updated
      expect(component.username).toBe('testuser');
      expect(component.password).toBe('testpassword');
    });

    it('should call the onLogin method when the form is submitted', () => {
      jest.spyOn(component, 'onLogin');  // Spy on the onLogin method

      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
      submitButton.click();  // Simulate a form submission

      expect(component.onLogin).toHaveBeenCalled();  // Ensure the onLogin method was called
    });

    it('should display the correct username in the alert message when login is submitted', () => {
      jest.spyOn(window, 'alert');  // Spy on the alert function

      component.username = 'testuser';  // Set the username property
      component.onLogin();  // Call the onLogin method

      expect(window.alert).toHaveBeenCalledWith('Logged in as: testuser');  // Verify alert message
    });
  });
});

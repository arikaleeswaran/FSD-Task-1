**FSD TASK - 1**

**Problem Statement: Employee Management System:**

**Objective:**
Develop a Full-Stack application that enables administrators to add employees to the system with
proper form validation. The solution should ensure data integrity, a user-friendly experience, and a
secure submission process.
Requirements:
Functional Requirements:
1. Add Employee:
- Provide a form to add new employees with the following fields:
- Name: Text input (First and Last Name).
- Employee ID: Unique identifier (alphanumeric, max 10 characters).
- Email: Must follow a valid email format.
- Phone Number: 10-digit number, no special characters.
- Department: Dropdown menu with predefined options (e.g., HR, Engineering, Marketing, etc.).
- Date of Joining: Date picker, should not accept future dates.
- Role: Text input, e.g., "Manager," "Developer."
- The form should have a "Submit" button and a "Reset" button.
2. Validations:
-  All fields are mandatory.
-  Employee ID must be unique.
-  Email should be validated on the frontend and backend.
-  Phone number must only accept valid formats.
-  Prevent submission if any field is invalid.
3. Feedback:
- Display real-time validation errors below the fields.
- On successful submission, show a success message.
- On failure, show an appropriate error message (e.g., "Employee ID already exists").
4. Data Storage:
- Save submitted employee details to a database.
- Ensure no duplicate Employee IDs or Emails are stored.
The idea of this task opens to any creative ideas alongside the mentioned
requirements.

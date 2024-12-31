// // Custom Error Classes
// class DatabaseError extends Error {
//     constructor(public query: string, message: string) {
//       super(message);
//       this.name = "DatabaseError";
//     }
//   }
  
//   class ValidationError extends Error {
//     constructor(public field: string, message: string) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
  
//   // Union Type for Errors
//   type AppError = DatabaseError | ValidationError;
  
//   // Simulated Database Function
//   interface User {
//     id: number;
//     name: string;
//   }
  
//   function fetchUserFromDatabase(id: number): User | AppError {
//     if (id <= 0) {
//       return new ValidationError("id", "ID must be greater than zero.");
//     }
  
//     if (id === 404) {
//       return new DatabaseError("SELECT * FROM users WHERE id = 404", "User not found.");
//     }
  
//     return { id, name: "John Doe" }; // Simulated user data
//   }
  
//   // Safe Wrapper for Fetching Users
//   function getUser(id: number): { success: true; user: User } | { success: false; error: AppError } {
//     const result = fetchUserFromDatabase(id);
//     if (result instanceof Error) {
//       return { success: false, error: result };
//     }
//     return { success: true, user: result };
//   }
  
//   // Function to Handle the Result
//   function handleUserResult(id: number): void {
//     const result = getUser(id);
  
//     if (result.success) {
//       console.log(`User fetched successfully:`, result.user);
//     } else {
//       handleError(result.error);
//     }
//   }
  
//   // Error Handling Function
//   function handleError(error: AppError): void {
//     if (error instanceof ValidationError) {
//       console.error(`Validation Error: Field "${error.field}" - ${error.message}`);
//     } else if (error instanceof DatabaseError) {
//       console.error(`Database Error: Query "${error.query}" - ${error.message}`);
//     } else {
//       const exhaustiveCheck: never = error; // Ensures all error types are handled
//       throw new Error(`Unhandled error type: ${exhaustiveCheck}`);
//     }
//   }
  
//   // Example Usage
//   handleUserResult(1);     // Valid user
//   handleUserResult(404);   // User not found (DatabaseError)
//   handleUserResult(-1);    // Invalid ID (ValidationError)
  

// Define a Result type
type Result<T, E> = { success: true; value: T } | { success: false; error: E };
// Function to simulate a computation that could fail
function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return { success: false, error: "Division by zero is not allowed." };
    }
    return { success: true, value: a / b };
}
// A wrapper to use the Result type
function handleResult<T, E>(result: Result<T, E>): void {
    if (result.success) {
        // Handle success
        console.log("Success:", result.value); // Access value when success is true
    } else {
        // Handle error
        console.error("Error:", result.error); // Access error when success is false
    }
}


const result1 = divide(10, 2); // Success case
const result2 = divide(10, 0); // Error case
    // Handle both cases safely
handleResult(result1);
handleResult(result2);









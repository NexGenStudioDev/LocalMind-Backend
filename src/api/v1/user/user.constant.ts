enum UserConstant {

    CREATE_USER_SUCCESS = "User created successfully",
    UPDATE_USER_SUCCESS = "User updated successfully",
    DELETE_USER_SUCCESS = "User deleted successfully",
    GET_USER_SUCCESS = "User fetched successfully",
    GET_ALL_USERS_SUCCESS = "All users fetched successfully",
  
    REGISTER_USER_SUCCESS = "User registered successfully",
    LOGIN_USER_SUCCESS = "User logged in successfully",
    USER_PROFILE_SUCCESS = "User profile fetched successfully",
    GENERATE_API_KEY_SUCCESS = "API key generated successfully",
    PASSWORD_CHANGED_SUCCESS = "Password changed successfully",
    PASSWORD_RESET_SUCCESS = "Password reset successfully",
    EMAIL_VERIFIED_SUCCESS = "Email verified successfully",
  
 
    CREATE_USER_FAILED = "Failed to create user",
    UPDATE_USER_FAILED = "Failed to update user",
    DELETE_USER_FAILED = "Failed to delete user",
    GET_USER_FAILED = "Failed to fetch user",
    GET_ALL_USERS_FAILED = "Failed to fetch users",
  
    REGISTER_USER_FAILED = "Failed to register user",
    LOGIN_USER_FAILED = "Invalid email or password",
    USER_PROFILE_FAILED = "Failed to fetch user profile",
    GENERATE_API_KEY_FAILED = "Failed to generate API key",
    PASSWORD_CHANGED_FAILED = "Failed to change password",
    PASSWORD_REQUIRED = "Password is required",
    PASSWORD_RESET_FAILED = "Failed to reset password",
    EMAIL_VERIFIED_FAILED = "Failed to verify email",
  

    TOKEN_MISSING = "Authentication token missing",
    INVALID_TOKEN = "Invalid token",
    UNAUTHORIZED = "Unauthorized access",
    FORBIDDEN = "Forbidden access",
  

    USER_NOT_FOUND = "User not found",
    EMAIL_ALREADY_EXISTS = "Email already exists",
    INVALID_INPUT = "User is not available in request",
    INVALID_CREDENTIALS = "Invalid credentials",
    SERVER_ERROR = "Something went wrong, please try again later",
  }
  
  export default UserConstant;
  
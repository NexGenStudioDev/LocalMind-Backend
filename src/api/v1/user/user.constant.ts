enum UserConstant {

  // ✅ USER CRUD OPERATIONS

  CREATE_USER_SUCCESS = "User created successfully",
  UPDATE_USER_SUCCESS = "User updated successfully",
  DELETE_USER_SUCCESS = "User deleted successfully",
  GET_USER_SUCCESS = "User fetched successfully",
  GET_ALL_USERS_SUCCESS = "All users fetched successfully",

  CREATE_USER_FAILED = "Failed to create user",
  UPDATE_USER_FAILED = "Failed to update user",
  DELETE_USER_FAILED = "Failed to delete user",
  GET_USER_FAILED = "Failed to fetch user",
  GET_ALL_USERS_FAILED = "Failed to fetch users",


  // ✅ AUTHENTICATION & REGISTRATION

  REGISTER_USER_SUCCESS = "User registered successfully",
  LOGIN_USER_SUCCESS = "User logged in successfully",
  USER_PROFILE_SUCCESS = "User profile fetched successfully",
  GENERATE_API_KEY_SUCCESS = "API key generated successfully",
  PASSWORD_CHANGED_SUCCESS = "Password changed successfully",
  PASSWORD_RESET_SUCCESS = "Password reset successfully",
  EMAIL_VERIFIED_SUCCESS = "Email verified successfully",

  REGISTER_USER_FAILED = "Failed to register user",
  LOGIN_USER_FAILED = "Invalid email or password",
  USER_PROFILE_FAILED = "Failed to fetch user profile",
  GENERATE_API_KEY_FAILED = "Failed to generate API key",
  PASSWORD_CHANGED_FAILED = "Failed to change password",
  PASSWORD_RESET_FAILED = "Failed to reset password",
  EMAIL_VERIFIED_FAILED = "Failed to verify email",


  // ✅ PASSWORD VALIDATION & ERRORS

  PASSWORD_REQUIRED = "Password is required",
  INVALID_PASSWORD = "Invalid password",
  PASSWORD_UNDEFINED = "Provided password is undefined",

  PASSWORD_MIN_LENGTH = "Password must be at least 8 characters",
  PASSWORD_MAX_LENGTH = "Password must be at most 20 characters",
  PASSWORD_UPPERCASE_REQUIRED = "Password must contain at least one uppercase letter",
  PASSWORD_LOWERCASE_REQUIRED = "Password must contain at least one lowercase letter",
  PASSWORD_NUMBER_REQUIRED = "Password must contain at least one number",
  PASSWORD_SPECIAL_CHAR_REQUIRED = "Password must contain at least one special character",


  // ✅ TOKEN & AUTHORIZATION ERRORS

  TOKEN_MISSING = "Authentication token missing",
  INVALID_TOKEN = "Invalid token",
  UNAUTHORIZED = "Unauthorized access",
  FORBIDDEN = "Forbidden access",


  // ✅ USER & INPUT VALIDATION

  USER_NOT_FOUND = "User not found",
  EMAIL_ALREADY_EXISTS = "Email already exists",
  INVALID_INPUT = "User is not available in request",
  INVALID_CREDENTIALS = "Invalid credentials",
  NAME_REQUIRED = "Name is required!",


  // ✅ DATABASE & SERVER ERRORS

  DATABASE_FIND_USER_ERROR = "Database error while finding user by email",
  SERVER_ERROR = "Something went wrong, please try again later",
}

export default UserConstant;

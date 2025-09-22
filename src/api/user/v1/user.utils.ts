import jwt, { SignOptions, JwtPayload as JWTType } from "jsonwebtoken";
import { env } from "../../../constant/env.constant";

export interface JwtPayload {
  userId: string;
  email: string;
  role?: string;
}

class UserUtils {
  private static readonly JWT_SECRET: string = env.JWT_SECRET;
  private static readonly EXPIRES_IN: string | number = env.JWT_EXPIRATION;

  public static generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.EXPIRES_IN,
    } as SignOptions);
  }

  public static verifyToken(token: string): JwtPayload | null {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);

      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "userId" in decoded &&
        "email" in decoded
      ) {
        return decoded as JwtPayload;
      }

      return null;
    } catch {
      return null; 
    }
  }
}

export default UserUtils;

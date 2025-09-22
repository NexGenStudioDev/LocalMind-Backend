import { Response } from "express";

type SuccessData = Record<string, any> | string | null;

export class SendResponse {
    
  static success(res: Response, message: string, data: SuccessData = null, status = 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
    });
  }

  static error(res: Response, message: string, status = 500, error?: any) {
    return res.status(status).json({
      success: false,
      message,
      error: error ? (typeof error === "string" ? error : error?.message || error) : undefined,
    });
  }
}
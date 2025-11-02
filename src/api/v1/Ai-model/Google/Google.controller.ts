import { Request, Response } from "express";
import AiTemplate from "../../../../Template/v1/Ai.template";
import GeminiUtils from "./Google.utils";
import GoogleService from "./Google.service";
import { SendResponse } from "../../../../utils/SendResponse.utils";

class Google_Controller {
  async ChatWithGoogleAI(req: Request, res: Response) {
    try {
      let { Prompt } = req.body;

      let Ai_Response = await GoogleService.ChatWithGoogleAI(Prompt);

      SendResponse.success(
        res,
        "AI response generated successfully",
        Ai_Response,
      );
    } catch (error) {
      SendResponse.error(res, "Failed to generate AI response", 500, error);
    }
  }
}

export default new Google_Controller();

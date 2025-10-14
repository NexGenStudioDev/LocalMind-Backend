import { Request, Response } from "express";
import { SendResponse } from "../../../../utils/SendResponse.utils";
import OllamaService from "./Ollama.service";
import OllamaUtils from "./Ollama.utils";

class OllamaController {
  public async ChartWithOllama(res: Response, req: Request) {
    try {
      console.log("👉 Request Body:", req.body); // Debug log

      // await OllamaUtils.isModelAvailable(model);

      // let Ai_Response = await OllamaService.generateText(
      //   prompt,
      //   model
      // );

      // console.log('Ai_Response', Ai_Response);

      //  SendResponse.success(
      //     res,
      //     "AI response generated successfully",
      //     Ai_Response,
      //     200
      //   );
    } catch (err: any) {
      console.log("err", err);
      // SendResponse.error(res, "Failed to generate AI response", 500, err);
    }
  }
}

export default new OllamaController();

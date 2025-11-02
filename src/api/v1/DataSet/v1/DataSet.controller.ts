import { Request, Response } from "express";

import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import path from "path";
import { SendResponse } from "../../../../utils/SendResponse.utils";
import DataSetService from "./DataSet.service";

class DataSetController {
  public async uploadDataSet(req: Request, res: Response): Promise<void> {
    try {
      const filePath = path.join(path.resolve(), "src", "data", "Sample.csv");

      const loader = new CSVLoader(filePath);
      const documents = await loader.load();

      const Prepare_dataSet = await DataSetService.Prepate_DataSet(documents);

      SendResponse.success(
        res,
        "Dataset uploaded and processed successfully",
        JSON.parse(Prepare_dataSet),
      );
    } catch (error: any) {
      SendResponse.error(res, "Failed to upload dataset", 500, error);
    }
  }
}

export default new DataSetController();

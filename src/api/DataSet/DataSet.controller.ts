import { Request, Response } from "express";
import { SendResponse } from "../../utils/SendResponse.utils";
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import path from "path";

class DataSetController {
  public async uploadDataSet(req: Request, res: Response): Promise<void> {
    try {
      const filePath = path.join(path.resolve(), 'src', 'data', 'Sample.csv');

   

    
      const loader = new CSVLoader(filePath);
      const documents = await loader.load();

      console.log("Loaded Documents:", documents);

    
    } catch (error: any) {
      
    }
  }
}

export default new DataSetController();

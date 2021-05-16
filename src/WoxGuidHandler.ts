import { Logger } from "./woxlib/Logger";
import { IWoxQueryHandler } from "./woxlib/IWoxQueryHandler";
import { JsonRPCAction } from "./woxlib/JsonRPCAction";
import { ResultItem } from "./woxlib/ResultItem";
import { Result } from "./woxlib/Result";
import { v4 as uuid } from "uuid";
import * as clipboardy from "clipboardy";
interface FoundDefinition {
  word: string;
  definition: string;
}

export class WoxGuidHandler implements IWoxQueryHandler {
  constructor(private logger: Logger) {}

  async processAsync(rpcAction: JsonRPCAction): Promise<Result> {
    if (rpcAction.method === "query") {
      const guid = uuid();
      const results = {
        IcoPath: "app.png",
        JsonRPCAction: {
          method: "copyToCliboard",
          parameters: [guid],
        },
        Subtitle: "Select to copy to clipboard",
        Title: guid,
      };

      return {
        result: [results],
      };
    } else if (rpcAction.method === "copyToCliboard") {
      clipboardy.writeSync(rpcAction.parameters[0]);
    } else {
      this.logger.log(JSON.stringify(rpcAction));
    }
    return {
      result: [],
    };
  }
}

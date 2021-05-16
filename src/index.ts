import { Logger } from "./woxlib/Logger";
import { WoxGuidHandler } from "./WoxGuidHandler";
import { WoxQueryProcessor } from "./woxlib/WoxQueryProcessor";

const logger = new Logger();
const handler = new WoxGuidHandler(logger);
const processor = new WoxQueryProcessor(handler, logger);
processor.processFromCommandLineAsync(process.argv).then(() => {});

import { StatusType } from "./constants";

export class UtilService {

  getStatusTypes(): string[] {
    const statusTypes: string[] = [];
  
    for (let st in StatusType) {
        statusTypes.push(StatusType[st]);
    }
  
    return statusTypes;
  };
}

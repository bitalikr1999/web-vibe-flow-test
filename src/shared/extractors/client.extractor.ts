import { ClientStatus, IClient } from "@/typing";

export class ClientExtractor {
  static getClinic(client: IClient) {
    return client?.clientInfo?.clinic;
  }

  static isDraft(client: IClient) {
    return client?.clientInfo?.status === ClientStatus.Draft;
  }

  static isActive(client: IClient) {
    return client?.clientInfo?.status === ClientStatus.Active;
  }
}

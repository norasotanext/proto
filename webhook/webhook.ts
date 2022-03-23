/* eslint-disable */
export const protobufPackage = "webhook";

export interface WebhookById {
  id: number;
}

export interface Webhook {
  id: number;
  name: string;
}

export interface WebhookService {
  FindOne(request: WebhookById): Promise<Webhook>;
}

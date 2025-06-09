export interface ErrorPayload {
  message: string;
  data?: any;
  url?: string;
  payload?: any;
  method?: string;
  status?: number;
}

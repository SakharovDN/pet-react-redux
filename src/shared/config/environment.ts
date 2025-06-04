interface Environment {
  baseApiUrl: string;
}

export const environment: Environment = {
  baseApiUrl: import.meta.env.VITE_BASE_API_URL!,
};

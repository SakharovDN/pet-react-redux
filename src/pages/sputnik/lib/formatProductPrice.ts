export const formatProductPrice = (price: number, { currency, language }: { currency: string; language: string }) => {
  return (price * 1000).toLocaleString(language, { style: 'currency', currency });
};

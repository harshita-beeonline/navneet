export const getYahooStock = async (symbol) => {
  const res = await fetch(
    `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`
  );
  const data = await res.json();
  return data.chart.result[0].meta.regularMarketPrice;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type"); // "BSE" or "NSE"

  const symbol = type === "BSE" ? "NAVNETEDUL.BO" : "NAVNETEDUL.NS";

  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`
    );
    const data = await res.json();
    const price =
      data?.chart?.result?.[0]?.meta?.regularMarketPrice || null;

    return Response.json({ price });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch stock price" }),
      { status: 500 }
    );
  }
}

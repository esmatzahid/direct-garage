export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    const response = await fetch(`https://carapi.app/api/obd-codes/${encodeURIComponent(code)}`);
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch OBD data" },
      { status: 500 }
    );
  }
}

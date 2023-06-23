import Portfolio from "@/models/Portfolio";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const q = req.query;
  const filters = {
    ...(q.category && { category: q.category }),
  };

  try {
    await connect(); // DB 연결

    const portfolios = await Portfolio.find(filters);

    return new NextResponse(JSON.stringify(portfolios), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

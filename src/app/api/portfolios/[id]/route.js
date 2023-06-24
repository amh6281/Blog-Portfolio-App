import Portfolio from "@/models/Portfolio";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect(); // DB 연결

    const portfolio = await Portfolio.findById(id);

    return new NextResponse(JSON.stringify(portfolio), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error!", { status: 500 });
  }
};

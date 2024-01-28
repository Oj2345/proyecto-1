// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Transactions = {
  id: number;
  date: string;
  price: number;
  status: "success" | "pending" | "expired";
  type?: "online-store" | "merchant";
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transactions[]>
) {
  console.log(req.method)
  res.status(200).json([
    {
      id: 1,
      type: "online-store",
      date: "Jul 7,2023 at 11:55",
      price: 60.0,
      status: "success",
    },
    {
      id: 2,
      type: "merchant",
      price: 100.0,
      date: "Jul 7,2023 at 11:55",
      status: "pending",
    },
    {
      id: 3,
      type: "online-store",
      price: 23.0,
      date: "Jul 7,2023 at 11:55",
      status: "expired",
    },
  ]);
}

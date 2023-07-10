import User from "@/model/User";
import { connectDB } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    if (password !== user.password) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Login success", data: user });
  } catch (error: any) {
    res
      .status(400)
      .json({ success: false, message: error?.message, stack: error?.stack });
  }
};

export default login;

import { Response } from "express";
import Users from "@models/userModel";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "@utils/generateToken";

export const checkLoginUser = async (
  account: string,
  password: string,
  res: Response
) => {
  //user 찾기
  const user = await Users.findOne({ account });

  //못찾으면 에러
  if (!user)
    return res.status(400).json({ msg: "This account doesn't exist." });

  //user가 있을경우
  //비번 일치 확인
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." });

  //유저 id를 토큰으로 만들기1(access, refresh)
  const access_token = generateAccessToken({ id: user._id });
  const refresh_token = generateRefreshToken({ id: user._id });

  // await Users.findOneAndUpdate({ _id: user._id }, { rf_token: refresh_token });

  //(유저 id)refresh_token 쿠키 만들기
  res.cookie("refresh_token", refresh_token, {
    httpOnly: true,
    path: `/api/refresh`,
    maxAge: 30 * 24 * 60 * 60 * 1000, //day*hour*min*sec*ms //30days
  });

  res.status(200).json({
    msg: "Login Success!",
    access_token,
    data: { ...user._doc, password: "" }, //비번빼고 보여주는 방법1
  });
};

// import { Request, Response } from "express";
// import { User } from '../models/Users';
// express에서 Request, Response 타입을 가져오면 됨

// 회원가입
// export const postUsers = async (req:Request, res:Response) => {
//   const { email, name, password } = req.body;
//   const user = {
//     name,
//     email,
//     password,
//   };

//   await User.create(user);
//   console.log(email, name, password);

//   return res.status(201).send('회원가입 API');
// };

// // 회원 조회
// export const getUser = async (req:Request, res:Response) => {
//   const { userId } = req.params;
//   try {
//     const user = await User.findByPk(userId);
//     return res.status(200).send({ user });
//   } catch (error) {
//     return res.status(500).send({ message: '오류' });
//   }
// };
// // 회원 정보 수정
// export const patchUser = async (req:Request, res:Response) => {
//   const { password, userId } = req.body;

//   try {
//     await User.update({ password }, { where: userId });
//     return res.status(500).send();
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({ message: error });
//   }
// };

// // 회원탈퇴
// export const deleteUser = async (req:Request, res:Response) => {
//   const { userId } = req.params;
//   console.log(userId);
//   try {
//     await User.destroy({ where: userId });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send();
//   }
//   return res.status(200).send();
// };

import User from "./user.model";
import { IUser } from "./user.type";
import UserUtils from "./user.utils";

class userService {
  async createUser(data: IUser) {
    if (!data.password) throw new Error("password require!");
    const hashPassword = await UserUtils.passwordHash(data.password);
    const user = await User.create({
      ...data,
      password: hashPassword,
    });
    return user;
  }
}
export default new userService();

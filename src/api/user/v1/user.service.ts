import User from "./user.model";
import { IUser } from "./user.type";

class userService {
    async createUser (data: IUser) {
      const user = await User.create(data);
      return user; 
    }
}
export default new userService();
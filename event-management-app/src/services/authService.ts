import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthService {
    private users: User[] = [];

    async createUser(username: string, password: string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = { username, password: hashedPassword };
        this.users.push(newUser);
        return newUser;
    }

    async validateUser(username: string, password: string): Promise<boolean> {
        const user = this.users.find(user => user.username === username);
        if (!user) return false;
        return await bcrypt.compare(password, user.password);
    }

    generateToken(user: User): string {
        return jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    }
}
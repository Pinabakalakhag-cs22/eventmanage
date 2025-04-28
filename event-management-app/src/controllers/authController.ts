import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async registerUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.authService.createUser(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public async loginUser(req: Request, res: Response): Promise<void> {
        try {
            const token = await this.authService.validateUser(req.body);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}
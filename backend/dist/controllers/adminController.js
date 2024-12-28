// import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import {Admin , IAdmin } from '../models/Admin';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.js';
export const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const admin = yield Admin.findOne({ email });
        if (admin && (yield admin.comparePassword(password))) {
            res.json({
                _id: admin._id,
                email: admin.email,
                token: generateToken(admin._id),
            });
        }
        else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }
    catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error logging in', error: error instanceof Error ? error.message : 'Unknown error' });
    }
});
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

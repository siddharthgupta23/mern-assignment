var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Enrollment } from '../models/Enrollment.js';
export const createEnrollment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollment = yield Enrollment.create(req.body);
        res.status(201).json(enrollment);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating enrollment', error });
    }
});
export const getEnrollments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollments = yield Enrollment.find().sort({ createdAt: -1 });
        res.status(200).json(enrollments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching enrollments', error });
    }
});

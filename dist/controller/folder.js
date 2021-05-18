"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.removeFolder = exports.addFolder = exports.addRoot = void 0;
const folder_1 = __importDefault(require("../models/folder"));
const addRoot = async (req, res, next) => {
    try {
        const folder = await folder_1.default.create([
            { _id: 'MongoDB', parent: 'Databases' },
            { _id: 'dbm', parent: 'Databases' },
            { _id: 'Databases', parent: 'Programming' },
            { _id: 'Languages', parent: 'Programming' },
            { _id: 'Programming', parent: 'Books' },
            { _id: 'Books', parent: null },
        ]);
        res.status(200).json({
            success: true,
            data: folder,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.addRoot = addRoot;
const addFolder = async (req, res, next) => {
    try {
        const newNode = await folder_1.default.create(req.body);
        res.status(200).json({
            success: true,
            data: newNode,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.addFolder = addFolder;
const removeFolder = async (req, res, next) => {
    try {
        await folder_1.default.deleteMany({
            $or: [{ _id: req.body._id }, { parent: req.body._id }],
        });
        res.status(200).json({
            success: true,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.removeFolder = removeFolder;
const read = async (req, res, next) => {
    try {
        const folders = await folder_1.default.find();
        res.status(200).json({
            success: true,
            data: folders,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.read = read;

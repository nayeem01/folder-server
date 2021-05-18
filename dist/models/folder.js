"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const folderSchema = new mongoose_1.Schema({
    _id: {
        type: String,
    },
    parent: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Folder', folderSchema);

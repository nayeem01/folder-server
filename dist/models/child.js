"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const childSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Child', childSchema);

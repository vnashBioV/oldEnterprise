"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const lab_1 = require("@mui/lab");
function MuiDateRangePicker() {
    const [value, setValue] = (0, react_1.useState)([null, null]);
    console.log({ value });
    return (react_1.default.createElement(material_1.Box, { width: "500px" },
        react_1.default.createElement(lab_1.DateRangePicker, { startText: "start date", endText: "end date", value: value, onChange: (newValue) => {
                setValue(newValue);
            }, renderInput: (startProps, endProps) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.TextField, Object.assign({}, startProps)),
                react_1.default.createElement(material_1.Box, { sx: { mx: 2 } }, " to "),
                react_1.default.createElement(material_1.TextField, Object.assign({}, endProps)))) }))
    // <div>
    //   <h1>Hello</h1>
    // </div>
    );
}
exports.default = MuiDateRangePicker;

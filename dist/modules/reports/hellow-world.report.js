"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelloWorldReport = void 0;
const getHelloWorldReport = (options) => {
    const { name } = options;
    const docDefinition = {
        content: [`Hello ${name}!`],
    };
    return docDefinition;
};
exports.getHelloWorldReport = getHelloWorldReport;
//# sourceMappingURL=hellow-world.report.js.map
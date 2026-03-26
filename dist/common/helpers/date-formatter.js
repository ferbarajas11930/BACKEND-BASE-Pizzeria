"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
class DateFormatter {
    static getDDMMMMYYYY(date) {
        return this.formatter.format(date);
    }
    static getDDMMYYYY(date) {
        return this.formatterShort.format(date).replace(/ de /g, '-');
    }
}
exports.DateFormatter = DateFormatter;
DateFormatter.formatter = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
});
DateFormatter.formatterShort = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});
//# sourceMappingURL=date-formatter.js.map
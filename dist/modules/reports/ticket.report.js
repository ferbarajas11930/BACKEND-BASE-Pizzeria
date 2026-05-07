"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTicketReport = void 0;
const getTicketReport = (options) => {
    const { ticket, infoPizzeria } = options;
    return {
        pageSize: { width: 226, height: 'auto' },
        pageMargins: [10, 10, 10, 10],
        content: [
            { text: infoPizzeria?.nombre || 'PIZZERÍA', style: 'header' },
            { text: infoPizzeria?.telefono ? `Tel: ${infoPizzeria.telefono}` : '', alignment: 'center', fontSize: 8 },
            { text: infoPizzeria?.correo || '', alignment: 'center', fontSize: 8, margin: [0, 0, 0, 5] },
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 206, y2: 0, lineWidth: 0.5 }] },
            { text: `TICKET # ${ticket.numeroTicket}`, style: 'ticketNumber' },
            { text: `Fecha: ${new Date(ticket.fechaHora).toLocaleString('es-MX')}`, fontSize: 8 },
            { text: `Cliente: ${ticket.pedido?.cliente?.nombre || 'Público General'}`, fontSize: 8 },
            {
                text: `Entrega: ${ticket.pedido?.tipoEntrega === 'DOMICILIO' ? 'A DOMICILIO' : 'EN LOCAL'}`,
                fontSize: 8,
                bold: true,
                margin: [0, 2, 0, 0]
            },
            ticket.pedido?.tipoEntrega === 'DOMICILIO' && ticket.pedido?.cliente?.direccion
                ? {
                    text: `Dir. Envío: ${ticket.pedido.cliente.direccion}`,
                    fontSize: 8,
                    italics: true,
                    margin: [0, 2, 0, 5]
                }
                : [],
            ticket.pedido?.tipoEntrega !== 'DOMICILIO' && ticket.pedido?.numeroMesa
                ? { text: `Mesa: # ${ticket.pedido.numeroMesa}`, fontSize: 8, margin: [0, 2, 0, 5] }
                : [],
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 206, y2: 0, lineWidth: 0.5 }], margin: [0, 5, 0, 5] },
            {
                table: {
                    widths: [20, '*', 45],
                    body: [
                        [
                            { text: 'Cant', style: 'tableHeader' },
                            { text: 'Descripción', style: 'tableHeader' },
                            { text: 'Total', style: 'tableHeader', alignment: 'right' }
                        ],
                        ...ticket.pedido.detalles.map((d) => [
                            { text: d.cantidad.toString(), fontSize: 8 },
                            {
                                stack: [
                                    { text: d.menu.nombre, fontSize: 8, bold: true },
                                    d.termino ? { text: `Término: ${d.termino}`, fontSize: 7, italics: true } : '',
                                    d.extras?.length > 0 ? { text: `Extras: ${d.extras.join(', ')}`, fontSize: 7 } : ''
                                ]
                            },
                            { text: `$${(d.cantidad * d.precioUnitario).toFixed(2)}`, fontSize: 8, alignment: 'right' }
                        ])
                    ]
                },
                layout: 'noBorders'
            },
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 206, y2: 0, lineWidth: 0.5 }], margin: [0, 5, 0, 0] },
            { text: `Subtotal:   $${ticket.subtotal.toFixed(2)}`, fontSize: 9, margin: [0, 5, 0, 0] },
            { text: `IVA (16%):  $${ticket.iva.toFixed(2)}`, fontSize: 9 },
            ticket.tarifaEnvio > 0
                ? { text: `Envío:      $${ticket.tarifaEnvio.toFixed(2)}`, fontSize: 9 }
                : [],
            ticket.descuento > 0
                ? { text: `Descuento: -$${ticket.descuento.toFixed(2)}`, fontSize: 9 }
                : [],
            { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 206, y2: 0, lineWidth: 1 }], margin: [0, 4, 0, 4] },
            {
                text: `TOTAL: $${ticket.total.toFixed(2)}`,
                bold: true,
                fontSize: 12,
                alignment: 'center'
            },
            { text: '¡Gracias por su preferencia!', alignment: 'center', fontSize: 9, margin: [0, 15, 0, 0] },
            { text: '¡Buen provecho!', alignment: 'center', fontSize: 9, margin: [0, 2, 0, 0] }
        ],
        styles: {
            header: { fontSize: 14, bold: true, alignment: 'center' },
            ticketNumber: { fontSize: 10, bold: true, alignment: 'center', margin: [0, 2, 0, 2] },
            tableHeader: { fontSize: 8, bold: true }
        }
    };
};
exports.getTicketReport = getTicketReport;
//# sourceMappingURL=ticket.report.js.map
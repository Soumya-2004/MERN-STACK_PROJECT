const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  attendeeName: { type: String, required: true },
  attendeeEmail: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);

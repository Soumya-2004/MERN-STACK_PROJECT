const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// GET all tickets
router.get('/', async (req, res) => {
  const tickets = await Ticket.find().populate('event');
  res.json(tickets);
});

// POST create ticket
router.post('/', async (req, res) => {
  const { eventId, attendeeName, attendeeEmail } = req.body;
  const ticket = new Ticket({ event: eventId, attendeeName, attendeeEmail });
  await ticket.save();
  res.json(ticket);
});

// DELETE ticket
router.delete('/:id', async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: 'Ticket deleted' });
});

module.exports = router;

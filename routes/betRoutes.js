const express = require("express");
const router = express.Router();
const {
  createBet,
  updateStatus,
  getBet,
  setFinalResp,
  deleteBet,
  getRequestBet,
  changetofinal,
  SetWagerResp,
} = require("../task/betFunctions");
const {
  sendMessage,
  sendResolutionUpdate,
  sendResult,
} = require("../task/twilioFunctions");
const { Verifytoken } = require("../middlerware");

//api to create a new bet
router.post('/api/createbet', Verifytoken, createBet);

//api to get all the bets
router.get('/api/getbet/:num/:status', Verifytoken, getBet);

router.get('/api/getrequest/:num/:status', Verifytoken, getRequestBet);

//api to delete a specific bet
router.delete('/api/deletebet/:id', Verifytoken, deleteBet);

//api to change the status to final
router.patch("/api/updatefinal", Verifytoken, changetofinal);

//api to update the status of bet
router.patch('/api/updatestatus/:id', Verifytoken, updateStatus);

//api to getmessage response using twilio
router.post('/api/sendmessage', Verifytoken, sendMessage);

//api to send scheduled message at resolution date using twilio
router.post('/api/sendresolupdate/:id', Verifytoken, sendResolutionUpdate);

//api to send final message of win and loss
router.post("/api/sendresult", Verifytoken, sendResult);

//api to set the final response of both individuals/parties depending on an check code passed as params
router.patch('/api/setfinalresp/:id/:check', Verifytoken, setFinalResp);


router.patch('/api/setwagerResp/:id/:check', SetWagerResp);

module.exports = router;

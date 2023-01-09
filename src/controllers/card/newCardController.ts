import { Cards } from "@prisma/client";
import { Request, Response } from "express";
import { authUser } from "../../interfaces/authUserInterface";
import { serviceCreateCard } from "../../services/cards/serviceCreateCard";

export async function newCardController(req: Request, res: Response): Promise<Response>{
  try{
    const { type, surname, payment_day, last_four_digits }: Cards = req.body.card;
    const user: authUser = req.body.user;
    const card = {type, surname, payment_day, last_four_digits, owner_id: user.id}
    card.payment_day = Number(card.payment_day)
    const {status, message} = await serviceCreateCard(card)
    if(status) return res.status(201).send(message)
    return res.status(422).send(message)
  }catch{
    return res.status(500).send("Could not create card, please try again later!")
  }
}
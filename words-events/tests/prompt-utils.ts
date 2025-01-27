import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  PromptCompleted,
  WordUpdated
} from "../generated/Prompt/Prompt"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPromptCompletedEvent(
  editionNumber: BigInt,
  words: Array<string>,
  owners: Array<Address>,
  imageUri: string
): PromptCompleted {
  let promptCompletedEvent = changetype<PromptCompleted>(newMockEvent())

  promptCompletedEvent.parameters = new Array()

  promptCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "editionNumber",
      ethereum.Value.fromUnsignedBigInt(editionNumber)
    )
  )
  promptCompletedEvent.parameters.push(
    new ethereum.EventParam("words", ethereum.Value.fromStringArray(words))
  )
  promptCompletedEvent.parameters.push(
    new ethereum.EventParam("owners", ethereum.Value.fromAddressArray(owners))
  )
  promptCompletedEvent.parameters.push(
    new ethereum.EventParam("imageUri", ethereum.Value.fromString(imageUri))
  )

  return promptCompletedEvent
}

export function createWordUpdatedEvent(
  wordId: BigInt,
  newWord: string,
  previousOwner: Address,
  newOwner: Address,
  paidPrice: BigInt,
  newPrice: BigInt
): WordUpdated {
  let wordUpdatedEvent = changetype<WordUpdated>(newMockEvent())

  wordUpdatedEvent.parameters = new Array()

  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam("wordId", ethereum.Value.fromUnsignedBigInt(wordId))
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam("newWord", ethereum.Value.fromString(newWord))
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "paidPrice",
      ethereum.Value.fromUnsignedBigInt(paidPrice)
    )
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return wordUpdatedEvent
}

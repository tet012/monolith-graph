import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EditionCompleted,
  OwnershipTransferred,
  WordUpdated
} from "../generated/rePrompt3/rePrompt3"

export function createEditionCompletedEvent(
  editionNumber: BigInt,
  words: Array<string>,
  owners: Array<Address>
): EditionCompleted {
  let editionCompletedEvent = changetype<EditionCompleted>(newMockEvent())

  editionCompletedEvent.parameters = new Array()

  editionCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "editionNumber",
      ethereum.Value.fromUnsignedBigInt(editionNumber)
    )
  )
  editionCompletedEvent.parameters.push(
    new ethereum.EventParam("words", ethereum.Value.fromStringArray(words))
  )
  editionCompletedEvent.parameters.push(
    new ethereum.EventParam("owners", ethereum.Value.fromAddressArray(owners))
  )

  return editionCompletedEvent
}

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

export function createWordUpdatedEvent(
  wordId: BigInt,
  newWord: string,
  newOwner: Address,
  newPrice: BigInt,
  updateCount: BigInt
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
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )
  wordUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updateCount",
      ethereum.Value.fromUnsignedBigInt(updateCount)
    )
  )

  return wordUpdatedEvent
}

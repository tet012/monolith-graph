import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EditionCompleted,
  OwnershipTransferred,
  WordUpdated
} from "../generated/rePrompt2/rePrompt2"

export function createEditionCompletedEvent(
  editionNumber: BigInt,
  words: Array<string>,
  owners: Array<Address>,
  imageUri: string,
  timestamp: BigInt
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
  editionCompletedEvent.parameters.push(
    new ethereum.EventParam("imageUri", ethereum.Value.fromString(imageUri))
  )
  editionCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
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
  editionNumber: BigInt,
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
    new ethereum.EventParam(
      "editionNumber",
      ethereum.Value.fromUnsignedBigInt(editionNumber)
    )
  )
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

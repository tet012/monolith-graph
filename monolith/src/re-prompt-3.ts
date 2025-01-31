import {
  EditionCompleted as EditionCompletedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  WordUpdated as WordUpdatedEvent
} from "../generated/rePrompt3/rePrompt3"
import {
  EditionCompleted,
  OwnershipTransferred,
  WordUpdated
} from "../generated/schema"

export function handleEditionCompleted(event: EditionCompletedEvent): void {
  let entity = new EditionCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.editionNumber = event.params.editionNumber
  entity.words = event.params.words
  entity.owners = event.params.owners

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWordUpdated(event: WordUpdatedEvent): void {
  let entity = new WordUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.wordId = event.params.wordId
  entity.newWord = event.params.newWord
  entity.newOwner = event.params.newOwner
  entity.newPrice = event.params.newPrice
  entity.updateCount = event.params.updateCount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

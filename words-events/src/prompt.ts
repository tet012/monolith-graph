import {
  OwnershipTransferred as OwnershipTransferredEvent,
  PromptCompleted as PromptCompletedEvent,
  WordUpdated as WordUpdatedEvent,
} from "../generated/Prompt/Prompt";
import {
  OwnershipTransferred,
  PromptCompleted,
  WordUpdated,
} from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePromptCompleted(event: PromptCompletedEvent): void {
  let entity = new PromptCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.editionNumber = event.params.editionNumber;
  entity.words = event.params.words;

  entity.owners = event.params.owners.map((owner) =>
    Bytes.fromHexString(owner.toHexString())
  );

  entity.imageUri = event.params.imageUri;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWordUpdated(event: WordUpdatedEvent): void {
  let entity = new WordUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.wordId = event.params.wordId;
  entity.newWord = event.params.newWord;
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.paidPrice = event.params.paidPrice;
  entity.newPrice = event.params.newPrice;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

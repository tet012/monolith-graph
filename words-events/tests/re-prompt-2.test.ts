import {
  assert,
  describe,
  test,
  beforeAll,
} from "matchstick-as/assembly/index";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { handleEditionCompleted } from "../src/re-prompt-2";
import { createEditionCompletedEvent } from "./re-prompt-2-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Simplified Test", () => {
  beforeAll(() => {
    // Start with minimal data
    let owners = [
      Address.fromString("0xB138E3c77BcE752B260Faf1c1D4Af3B3Ea82fcbE"),
    ];
    let newEvent = createEditionCompletedEvent(
      BigInt.fromI32(1),
      ["test"],
      owners,
      "test",
      BigInt.fromI32(1)
    );
    handleEditionCompleted(newEvent);
  });

  test("Basic assertion", () => {
    assert.entityCount("EditionCompleted", 1);
  });
});

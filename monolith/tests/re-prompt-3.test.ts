import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { EditionCompleted } from "../generated/schema"
import { EditionCompleted as EditionCompletedEvent } from "../generated/rePrompt3/rePrompt3"
import { handleEditionCompleted } from "../src/re-prompt-3"
import { createEditionCompletedEvent } from "./re-prompt-3-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let editionNumber = BigInt.fromI32(234)
    let words = ["Example string value"]
    let owners = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let newEditionCompletedEvent = createEditionCompletedEvent(
      editionNumber,
      words,
      owners
    )
    handleEditionCompleted(newEditionCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EditionCompleted created and stored", () => {
    assert.entityCount("EditionCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EditionCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "editionNumber",
      "234"
    )
    assert.fieldEquals(
      "EditionCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "words",
      "[Example string value]"
    )
    assert.fieldEquals(
      "EditionCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owners",
      "[0x0000000000000000000000000000000000000001]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

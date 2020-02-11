import expect from "./expect"
import { FetchMjs } from "../src"

describe("fetchMjs", () => {
  it("should instantiate", () => {
    new FetchMjs()
  })

  it("should assert", () => {
    expect(true).toBe(true)
  })
})

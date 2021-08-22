import rewire from "rewire"
const afterInit = rewire("./afterInit")
const yarn = afterInit.__get__("yarn")
// @ponicode
describe("yarn", () => {
    test("0", () => {
        let callFunction: any = () => {
            yarn()
        }
    
        expect(callFunction).not.toThrow()
    })
})

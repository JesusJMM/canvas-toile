import {
  toileFramesFunctions,
  toileLoopSubscribe,
  toileLoopUnsubcribe,
} from '../src/renders/renders'

describe('Toile Render Subscribers', () => {
  it('Render subscribe', () => {
    const key = 'testFunction'
    const result = 'ok'
    toileLoopSubscribe(() => result, key)
    expect(toileFramesFunctions[key]()).toEqual(result)
  })
  it('Render unsubscribe', () => {
    const key = 'testFunction'
    const result = 'ok'
    toileLoopSubscribe(() => result, key)
    expect(toileFramesFunctions[key]()).toEqual(result)
    toileLoopUnsubcribe(key)
    expect(toileFramesFunctions[key]).toEqual(undefined)
  })
})

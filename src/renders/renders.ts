export interface ToileFramesContainer {
  [index: string] : Function 
}
export let toileFramesFunctions: ToileFramesContainer = {}
export function toileLoop(){
  for(let f in toileFramesFunctions){
    toileFramesFunctions[f]()
  }
  requestAnimationFrame(toileLoop)
}
export function toileLoopSubscribe(f : () => void, k : string){
  toileFramesFunctions[k] = f
}
export function toileLoopUnsubcribe(k: string){
  delete toileFramesFunctions[k]
}

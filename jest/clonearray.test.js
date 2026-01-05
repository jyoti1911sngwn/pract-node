const clocnearray = require('./clonearray')
test('copied different memory clone array', ()=>{
    const arr =[1,2,3,4]
    expect(clocnearray(arr)).toBe(arr)
})
test('copied array correctly clone array', ()=>{
    const arr =[1,2,3,4]
    expect(clocnearray(arr)).toEqual(arr)
})
test('copied not on same memory lcation clone array', ()=>{
    const arr =[1,2,3,4]
    expect(clocnearray(arr)).not.toBe(arr)
})
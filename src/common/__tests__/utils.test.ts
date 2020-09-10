import {
  getYear,
  convertMinToHour,
  convertOutOf10ToPercentage,
  formattedPrice,
} from '../utils'

describe('Utils', () => {
  describe('getYear()', () => {
    it.each([
      ['2020-08-22', '2020'],
      ['2019-01-30', '2019'],
    ])('should slice only year', (a,b) => {
      expect(getYear(a)).toEqual(b)
    })
  })

  describe('convertMinToHour()', () => {
    it.each([
      [150, '2h 30m'],
      [80, '1h 20m'],
      [120, '2h'],
    ])('should convert minute to hours', (a,b) => {
      expect(convertMinToHour(a)).toEqual(b)
    })
  })

  describe('convertOutOf10ToPercentage()', () => {
    it.each([
      [7.6, '76%'],
      [2.3, '23%'],
      [1.0, '10%'],
      [0.2, '2%'],
      [9.9, '99%'],
      [3, '30%'], 
      [4.77, '48%'],
      [4.73, '47%'], 
    ])('should convert out of 10 to percentage', (a,b) => {
      expect(convertOutOf10ToPercentage(a)).toEqual(b)
    })
  })

  describe('formattedPrice()', () => {
    it.each([
      [1000, '1,000'],
      [1000000,'1,000,000']
    ])('should return formatted price', (a,b) => {
      expect(formattedPrice(a)).toEqual(b)
    })
  })
})
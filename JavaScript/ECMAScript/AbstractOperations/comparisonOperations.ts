// 7.2 Testing and Comparison Operations

import { ESValueType } from '../types/value'
import { sameValue as numberSameValue } from "../ESLanguageType/NumbericType";
import { bigIntEqual } from '../ESLanguageType/BigIntType';

// 7.2.10 SameValue

export function sameValue(x: ESValueType, y: ESValueType): boolean {
  if(typeof x !== typeof y) return false;

  if(typeof x === 'number' && typeof y === 'number') {
    return numberSameValue(x, y);
  }
}

// 7.2.11 sameValueNonNumber

export function sameValueNonNumber(x: Omit<ESValueType, 'number'>, y: Omit<ESValueType, 'number'>) {

  if(typeof x === typeof y) {
    // null and undefined
    if(x === null || x === undefined) return true;

    if(typeof x === 'bigint' && typeof y === 'bigint') {
      return bigIntEqual(x, y);
    }

    // other language value are compared by identity
    return x === y
  }
}
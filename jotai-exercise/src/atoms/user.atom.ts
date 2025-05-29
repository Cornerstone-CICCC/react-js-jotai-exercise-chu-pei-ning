import { atom } from "jotai";

const firstNameAtom = atom<string>("")
const lastnameAtom = atom<string>("")
const ageAtom = atom<number>(0)
const hobbiesAtom = atom<string[]>([])
const hobbiesListAtom = atom(["swimming", "jogging", "dancing", "singing"])

export {
  firstNameAtom,
  lastnameAtom,
  ageAtom,
  hobbiesAtom,
  hobbiesListAtom
}
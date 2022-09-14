import React from "react";
import { modalState } from "../Atom/ModalAtom";
import {useRecoilState} from "recoil"

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h1>UploadModal</h1>
      {open && <h1>The Modal is Open</h1>}
    </div>
  )
}

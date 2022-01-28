import * as S from "./style";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { MdKeyboardArrowRight } from "react-icons/md";

import { useLocation } from "../../context/LocationContext";
import { FormEvent, useState } from "react";
import { useSearchLocation } from "../../hooks/useSearchLocation";
import { Loading } from "../Loading";
import LoadingBar from "react-top-loading-bar";

export default function SearchBox() {
  const { setIsOpenSearchModal, isOpenSearchModal, progress, setProgress } =
    useLocation();
  const [inputValue, setInputValue] = useState("");
  const { queryLocation, showLocalsQuery, locals, setLocals, isPending } =
    useSearchLocation();

  const handleClick = async (local: string) => {
    await queryLocation(local);
    setIsOpenSearchModal(false);
    setLocals([]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    showLocalsQuery(inputValue);
    setInputValue("");
  };

  return (
    <S.InputBox isOpenSearchModal={isOpenSearchModal}>
      <AiOutlineClose size={22} onClick={() => setIsOpenSearchModal(false)} />
      <LoadingBar
        color="var(--yellow)"
        onLoaderFinished={() => setProgress(0)}
        shadow={true}
        progress={progress}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <AiOutlineSearch size={22} />
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="search location"
          />
        </div>
        {isPending ? (
          <Loading color="var(--gray-500)" />
        ) : (
          <button type="submit">Search</button>
        )}
      </form>
      <S.Locals>
        {locals &&
          locals.map((local: any) => (
            <div onClick={() => handleClick(local)} key={local}>
              <span>{local}</span>
              <MdKeyboardArrowRight />
            </div>
          ))}
      </S.Locals>
    </S.InputBox>
  );
}

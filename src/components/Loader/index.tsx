import GridLoader from "react-spinners/GridLoader";
import * as S from './style'

export default function Loader() {
  return (
    <S.Loader>
      <GridLoader size={20} margin={5} color={"#fff"} />
    </S.Loader>
  );
}

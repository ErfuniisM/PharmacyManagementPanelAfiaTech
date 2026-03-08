// import Appoinments_list from "../components/common/appoinments_list";
import Toolbox from "../components/common/toolbox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import { PHARMACIES_ITEMS } from "../constants/database";

const APPOINTNET_FILTER_OPTIONS = [
  FILTER_OPTIONS.branch,
  FILTER_OPTIONS.wh,
  FILTER_OPTIONS.dist,
];

const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.pharmacy,
  TABEL_HEADER.phone,
  TABEL_HEADER.branch,
  TABEL_HEADER.wh,
  TABEL_HEADER.action,
];

const Phatmacies = () => {
  return (
    <Container>
      <Content title="Phatmacies" buttonTitle="Add a Phatmacies">
        <Toolbox filters={APPOINTNET_FILTER_OPTIONS} />
        <TableList header={APPOINTNET_TABEL_HEADER} body={PHARMACIES_ITEMS} />
      </Content>
    </Container>
  );
};

export default Phatmacies;

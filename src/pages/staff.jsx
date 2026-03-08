// import Appoinments_list from "../components/common/appoinments_list";
import Toolbox from "../components/common/toolbox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS } from "../constants";
import TableList from "../components/common/tabelList";
import { TABEL_HEADER } from "../constants";
import { STAFF_ITEMS } from "../constants/database";

const APPOINTNET_FILTER_OPTIONS = [
  FILTER_OPTIONS.depart,
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.status,
];

const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.name,
  TABEL_HEADER.phone,
  TABEL_HEADER.dep,
  TABEL_HEADER.joinDate,
  TABEL_HEADER.status,
  TABEL_HEADER.action,
];

const Staff = () => {
  return (
    <Container>
      <Content title="Staff" buttonTitle="Add a Staff Member">
        <Toolbox filters={APPOINTNET_FILTER_OPTIONS} />
        <TableList header={APPOINTNET_TABEL_HEADER} body={STAFF_ITEMS} />
      </Content>
    </Container>
  );
};

export default Staff;

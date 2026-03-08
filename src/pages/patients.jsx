// import Appoinments_list from "../components/common/appoinments_list";
import Toolbox from "../components/common/toolbox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import TableList from "../components/common/tabelList";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import { PATIENTS_ITEMS } from "../constants/database";

const APPOINTNET_FILTER_OPTIONS = [
  FILTER_OPTIONS.gender,
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.ins,
];

const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.name,
  TABEL_HEADER.phone,
  TABEL_HEADER.national,
  TABEL_HEADER.lastVisit,
  TABEL_HEADER.gender,
  TABEL_HEADER.insurance,
  TABEL_HEADER.action,
];

const Patients = () => {
  return (
    <Container>
      <Content title="Patients" buttonTitle="Add a Patients">
        <Toolbox filters={APPOINTNET_FILTER_OPTIONS} />
        <TableList header={APPOINTNET_TABEL_HEADER} body={PATIENTS_ITEMS} />
      </Content>
    </Container>
  );
};

export default Patients;

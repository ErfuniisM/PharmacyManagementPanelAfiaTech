import TabelList from "../components/common/tabelList";
import Toolbox from "../components/common/toolBox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS, TABEL_HEADER } from "../constants";
import { APPOINTMENTS_ITEMS } from "../constants/database";
import AppointmentModal from "./modals/appointmentModal";

const APPOINTNET_FILTER_OPTIONS = [
  FILTER_OPTIONS.date,
  FILTER_OPTIONS.time,
  FILTER_OPTIONS.status,
];
const APPOINTNET_TABEL_HEADER = [
  TABEL_HEADER.national,
  TABEL_HEADER.patient,
  TABEL_HEADER.doctor,
  TABEL_HEADER.date,
  TABEL_HEADER.time,
  TABEL_HEADER.status,
  TABEL_HEADER.action,
];

const Appointments = () => {
  return (
    <Container>
      <Content
        modal={<AppointmentModal />}
        title="Appointments"
        buttonTitle="Add an Appointment"
        modalTitle='Appointment Modal'
      >
        <Toolbox filters={APPOINTNET_FILTER_OPTIONS} />
        <TabelList header={APPOINTNET_TABEL_HEADER} body={APPOINTMENTS_ITEMS} />
      </Content>
    </Container>
  );
};

export default Appointments;

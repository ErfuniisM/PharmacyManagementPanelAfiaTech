// import Appoinments_list from "../components/common/appoinments_list";
import Toolbox from "../components/common/toolbox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import { FILTER_OPTIONS } from "../constants";
import SimpleFilterToolbar from "../constants/code";

const APPOINTNET_FILTER_OPTIONS = [FILTER_OPTIONS.date , FILTER_OPTIONS.time, FILTER_OPTIONS.status]

const Appointments = () => {
  return (
    <Container>
      <Content title="Appointments" buttonTitle="Add an Appointment">
        <Toolbox filters={APPOINTNET_FILTER_OPTIONS} />
      </Content>
      {/* <Appoinments_list /> */}
    </Container>
  );
};

export default Appointments;

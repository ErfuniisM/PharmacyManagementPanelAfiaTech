// import Appoinments_list from "../components/common/appoinments_list";
import Toolbox from "../components/common/toolbox";
import Container from "../components/layout/container";
import Content from "../components/layout/content";
import SimpleFilterToolbar from "../constants/code";

const Appointments = () => {
  return (
    <Container>
      <Content title="Appointments" buttonTitle="Add an Appointment">
        <Toolbox />
      </Content>
      {/* <Appoinments_list /> */}
    </Container>
  );
};

export default Appointments;

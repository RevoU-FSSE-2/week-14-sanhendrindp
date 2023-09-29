import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Typography } from "antd";

const AccountInfoForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card title={"Account Information"} bordered style={{ width: "350px" }}>
        <form>
          <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
              {"Your Name"}
            </Typography.Paragraph>
            <Input name={"name"} disabled />
          </div>
          <div>
            <Typography.Paragraph
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {"Your Email"}
            </Typography.Paragraph>
            <Input name={"email"} disabled />
          </div>
          <Button
            type={"default"}
            htmlType={"submit"}
            style={{ width: "300px", marginTop: "20px" }}
            onClick={() => navigate("/category")}
          >
            Back
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AccountInfoForm;

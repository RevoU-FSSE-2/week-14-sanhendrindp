import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Typography } from "antd";
import { useState, useEffect, useCallback } from "react";

const AccountInfoForm = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const token = sessionStorage.getItem("token");

  const getAccount = useCallback(async () => {
    const fetching = await fetch(
      `https://mock-api.arikmpt.com/api/user/profile`,
      {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await fetching.json();

    setUserData({
      name: response.data.name,
      email: response.data.email,
    });
    console.log(response);
  }, [token]);

  useEffect(() => {
    getAccount();
  }, [getAccount]);

  return (
    <>
      <Card title={"Account Information"} bordered style={{ width: "350px" }}>
        <form>
          <div>
            <Typography.Paragraph style={{ textAlign: "left" }}>
              {"Your Name"}
            </Typography.Paragraph>
            <Input name={"name"} value={userData.name} disabled />
          </div>
          <div>
            <Typography.Paragraph
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {"Your Email"}
            </Typography.Paragraph>
            <Input name={"email"} value={userData.email} disabled />
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

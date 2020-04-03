import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Select, Checkbox, Button } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

interface Props {
  onFinish: any;
}

const BillingForm = (props: Props) => {
  const [form] = Form.useForm();

  /*  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    console.log(values.phone)
  }; */

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="46">+46</Option>
        <Option value="45">+47</Option>
        <Option value="47">+47</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="billing">
    
    
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={["address", "country"]}
              noStyle
              rules={[{ required: true, message: "country is required" }]}
            >
              <Select placeholder="Select country">
                <Option value="Sverige">Sverige</Option>
                <Option value="Norge">Norge</Option>
                <Option value="Danmark">Danmark</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name={["address", "street"]}
              noStyle
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input style={{ width: "100%" }} placeholder="Gatuadress" />
            </Form.Item>
            <Form.Item
              name={["city", "postnummer"]}
              noStyle
              rules={[
                { required: true, message: "city and postnummer required" }
              ]}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Stad och Postnummer "
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!"
            }
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%"
            }}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the{" "}
            <a href="https://cheezburger.com/10501125/fuzzberta-peekachu-jones-is-definitely-the-cutest-guinea-pig-on-instagram">
              agreement
            </a>
          </Checkbox>
        </Form.Item>
    
      
    </div>
  );
};

export default BillingForm;

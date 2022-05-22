import { RefObject } from 'react';
import { Form, Input, Button, Dialog, TextArea, DatePicker, Selector, Slider, Stepper, Switch } from 'antd-mobile';
import dayjs from 'dayjs';
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker';

export default () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  return (
    <Form
      name="form"
      className="common-form"
      onFinish={onFinish}
      footer={
        <Button block type="submit" color="primary" size="large">
          提交
        </Button>
      }
    >
      <Form.Item name="phone" label="手机号" help="手机号" rules={[{ required: true }]}>
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="生日"
        trigger="onConfirm"
        onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
          datePickerRef.current?.open();
        }}
      >
        <DatePicker>{(value) => (value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期')}</DatePicker>
      </Form.Item>
      <Form.Item name="favoriteFruits" label="喜爱的水果">
        <Selector
          columns={3}
          multiple
          options={[
            { label: '苹果', value: 'apple' },
            { label: '橘子', value: 'orange' },
            { label: '香蕉', value: 'banana' },
          ]}
        />
      </Form.Item>
      <Form.Item name="slider-demo" label="滑块选择">
        <Slider ticks step={10} />
      </Form.Item>
    </Form>
  );
};

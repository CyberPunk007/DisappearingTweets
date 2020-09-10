import moment from 'moment';
import { DatePicker, Space } from 'antd';
import React, {useState} from 'react';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}
function Dtpicker () {
  const [date,setDate]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`time & date : ${moment}`)
  }
  return (
    <Space direction="vertical" size={14}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    />
  </Space>

  );
}

export default Dtpicker
import React from "react";

function sequence(start, end) {
  const array = [];
  for (let i = start; i <= end; i += 1) {
    array.push(i);
  }
  return array;
}

function datesInMonth(year, month) {
  switch (month) {
    case 2:
      const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      return leapYear ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

export function Select({ value, options, placeholder, ...props }) {
  const onChange = function (e) {
    props.setValue(parseInt(e.target.value, 10));
  };
  return <select onChange={onChange} {...props}>
    <option disabled selected>{placeholder}</option>
    {options.map((value) => (
      <option value={value}>{value}</option>
    ))}
  </select>
};

export class DateSelects extends React.Component {
  constructor(props) {
    super(props);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - props.maxAge;
    const maxYear = currentYear - props.minAge;
    const years = sequence(minYear, maxYear);
    const months = sequence(1, 12);
    this.state = {
      years,
      months,
      dates: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setDates(nextProps);
  }
  componentWillMount() {
    this.setDates(this.props);
  }
  setDates(props) {
    const numDates = datesInMonth(props.year, props.month);
    const dates = sequence(1, numDates);
    this.setState({ dates });

    if (props.date > numDates) {
      this.props.setDate({ date: numDates });
    }
  }
  setYear(year) {
    this.props.setDate({ year });
  }
  setMonth(month) {
    this.props.setDate({ month });
  }
  setDate(date) {
    this.props.setDate({ date });
  }

  render = () => <div {...this.props}>
    <Select
      value={this.props.year}
      setValue={this.setYear}
      options={this.state.years}
      name="birth_year" placeholder="출생년도"
    />
    <Select
      value={this.props.month}
      setValue={this.setMonth}
      options={this.state.months}
      name="birth_month" placeholder="월"
    />
    <Select
      value={this.props.date}
      setValue={this.setDate}
      options={this.state.dates}
      name="birth_day" placeholder="일"
    />
  </div>
}

export default DateSelects;

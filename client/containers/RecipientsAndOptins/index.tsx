import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { DatePicker, Card, Switch, Form } from "antd";
import { isEqual } from "underscore";
import OptinsAndRecipientsChart from "../../components/LineChart";

const { RangePicker } = DatePicker;

import {
  ContainerState,
  ContainerActions,
  ContainerActionsAndTypes,
} from "./types";
import { ApplicationRootState } from "../../types";

import { getList } from "./actions";
import makeSelectContainer from "./selectors";
import { prepareChartData } from "./utils";

interface DesiredSelection {}
interface Props extends ContainerActions {
  list?: ContainerState;
}

const RecipientsAndOptinsChartreport: React.FC<Props> = (props) => {
  const { getList, list } = props;
  const [filter, setFilter] = useState({
    from: "2020-01-01",
    to: "2020-01-02",
  });
  const [displayOption, setDisplayOption] = useState({
    optins: true,
    recipients: true,
  });
  const { listOptins, listRecipients } = list;
  const chartData = prepareChartData({
    listOptins,
    listRecipients,
    optins: displayOption.optins,
    recipients: displayOption.recipients,
  });

  const onChangeRangePicker = (value: any, dateString: string[]) => {
    const newFilter = { ...filter, from: dateString[0], to: dateString[1] };
    if (!isEqual(filter, newFilter)) {
      setFilter({ ...filter, from: dateString[0], to: dateString[1] });
    }
  };

  const onChangeSwitch = (checked: boolean, name: string) => {
    setDisplayOption({ ...displayOption, [name]: checked });
  };

  useEffect(
    () => {
      // Side effects
      getList(filter.from, filter.to);
    },
    [filter]
  );

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  return (
    <React.Fragment>
      <Card>
        <Form>
          <Form.Item {...layout} label="Date Range:">
            <RangePicker onChange={onChangeRangePicker} />
          </Form.Item>
          <Form.Item {...layout} label="Show Optins:">
            <Switch
              defaultChecked
              onChange={(checked: boolean) => onChangeSwitch(checked, "optins")}
            />
          </Form.Item>
          <Form.Item {...layout} label="Show Recipients:">
            <Switch
              defaultChecked
              onChange={(checked: boolean) =>
                onChangeSwitch(checked, "recipients")
              }
            />
          </Form.Item>
        </Form>
      </Card>
      ,
      <Card>
        <OptinsAndRecipientsChart
          chartData={chartData}
          displayOption={displayOption}
        />
      </Card>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector<
  ApplicationRootState,
  DesiredSelection
>({
  list: makeSelectContainer(),
});

function mapDispatchToProps(
  dispatch: ThunkDispatch<{}, {}, ContainerActionsAndTypes>
) {
  return {
    getList: (from: string, to: string) => dispatch(getList(from, to)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(RecipientsAndOptinsChartreport);

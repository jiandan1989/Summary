/**
 * @desc: 组件管理
 */

import { Divider, Button, Card, PageHeader, Collapse } from 'antd';
import AntdTable from '@/components/AntdTable';
import FilterPage from '@/components/CSS/FilterPage';
import DynamicInput from '@/components/DynamicInput';
import MarkDownLink from '@/components/MarkDownLink';
import KeywordWeight from '@/components/KeywordWeight';
import { CodePanel } from '@/components/AntdExpansion';
import CronExpression from '@/components/CronExpression';
import UseState from '@/components/ReactHooks/State/UseState';
import ClassState from '@/components/ReactHooks/State/ClassState';
import UseReducer from '@/components/ReactHooks/Reducer/UseReducer';
import UseContext from '@/components/ReactHooks/Context/useContext';
import ContextParent from '@/components/ReactHooks/Context/ContextParent';

const { Panel: CollapsePanel } = Collapse;

const allComponents = {
  UseState,
  CodePanel,
  AntdTable,
  UseReducer,
  UseContext,
  ClassState,
  FilterPage,
  MarkDownLink,
  ContextParent,
  DynamicInput,
  KeywordWeight,
  CronExpression,
  AntCard: Card,
  AntButton: Button,
  AntDivider: Divider,
  AntCollapse: Collapse,
  AntPageHeader: PageHeader,
  AntCollapsePanel: CollapsePanel,
};

export default allComponents;

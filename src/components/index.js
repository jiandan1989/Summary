/**
 * @desc: 组件管理
 */

import { Divider, Button, Card, PageHeader, Collapse } from 'antd';
import UseState from '@/components/ReactHooks/State/UseState';
import ClassState from '@/components/ReactHooks/State/ClassState';
import CronExpression from '@/components/CronExpression';
import KeywordWeight from '@/components/KeywordWeight';
import DynamicInput from '@/components/DynamicInput';
import MarkDownLink from '@/components/MarkDownLink';
import AntdTable from '@/components/AntdTable';
import ContextParent from '@/components/ReactHooks/Context/ContextParent';
import { CodePanel } from '@/components/AntdExpansion';

const { Panel: CollapsePanel } = Collapse;

const allComponents = {
  UseState,
  ClassState,
  CodePanel,
  AntdTable,
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
}

export default allComponents;
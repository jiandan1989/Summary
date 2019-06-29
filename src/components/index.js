/**
 * @desc: 组件管理
 */

import { Divider, Button, Card, PageHeader } from 'antd';
import UseState from '@/components/ReactHooks/UseState';
import CronExpression from '@/components/CronExpression';
import KeywordWeight from '@/components/KeywordWeight';
import DynamicInput from '@/components/DynamicInput';
import MarkDownLink from '@/components/MarkDownLink';
import AntdTable from '@/components/AntdTable';

const allComponents = {
  UseState,
  AntdTable,
  MarkDownLink,
  DynamicInput,
  KeywordWeight,
  CronExpression,
  AntCard: Card,
  AntButton: Button,
  AntDivider: Divider,
  AntPageHeader: PageHeader,
}

export default allComponents;
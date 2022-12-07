import { Divider, Button, Card, Collapse } from 'antd';
import AntdTable from './AntdTable';
import FilterPage from './CSS/FilterPage';
import DynamicInput from './DynamicInput';
import MarkDownLink from './MarkDownLink';
import KeywordWeight from './KeywordWeight';
import { CodePanel } from './AntdExpansion';
// import CronExpression from './CronExpression';
import UseState from './ReactHooks/State/UseState';
import ClassState from './ReactHooks/State/ClassState';
import UseReducer from './ReactHooks/Reducer/UseReducer';
import UseContext from './ReactHooks/Context/useContext';
import ContextParent from './ReactHooks/Context/ContextParent';

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
	// CronExpression,
	AntCard: Card,
	AntButton: Button,
	AntDivider: Divider,
	AntCollapse: Collapse,
	// AntPageHeader: PageHeader,
	AntCollapsePanel: CollapsePanel,
};

export default allComponents;

export { default as ErrorBoundary } from './ErrorBoundary';

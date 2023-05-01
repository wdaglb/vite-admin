import {
    Button,
    Input,
    Select,
    Table,
    Checkbox,
    Form,
    Radio,
    Switch,
    DatePicker,
    Divider,
    Layout,
    Space,
    Breadcrumb,
    Menu,
    Pagination,
    InputNumber,
    Cascader,
    Empty,
    Tag,
    Tabs,
    Spin,
    Progress,
    Drawer,
    Modal,
    Popconfirm,
    Alert,
} from 'ant-design-vue'
import { App } from 'vue'

export default {
    install (app: App) {
        app
            .use(Button)
            .use(Input)
            .use(Select)
            .use(Table)
            .use(Checkbox)
            .use(Form)
            .use(Radio)
            .use(Switch)
            .use(DatePicker)
            .use(Divider)
            .use(Layout)
            .use(Space)
            .use(Breadcrumb)
            .use(Menu)
            .use(Pagination)
            .use(InputNumber)
            .use(Cascader)
            .use(Empty)
            .use(Tag)
            .use(Tabs)
            .use(Spin)
            .use(Progress)
            .use(Drawer)
            .use(Modal)
            .use(Popconfirm)
            .use(Alert)
    }
}

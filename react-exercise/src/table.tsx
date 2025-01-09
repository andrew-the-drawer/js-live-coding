import { Button, Table } from 'antd';
import { ColumnType } from 'antd/es/table';

type DataShape = {
    name: string;
    date: string;
}

type TableProps = {
    data: Array<DataShape>;
}

const columns: ColumnType<DataShape>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        align: 'center'
    },
];

const CustomTable = ({ data }: TableProps) => {
    return (
        <>
            <Table style={{ width: '90%' }} dataSource={data} columns={columns} pagination={false}/>
            <div>
                <Button type='link'>Previous</Button>
                <Button type='link'>Next</Button>
            </div>
        </>
    );
}

export default CustomTable;
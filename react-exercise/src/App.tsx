import { Button } from 'antd';
import './App.css';
import Table from './table';

const App = () => {
  return (
    <div className="content">
      <h1>React exercise</h1>
      <div>
        <Button type="primary">Login</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', flexDirection: 'column' }}>
        <Table
          data={[
            { name: 'John', date: '2021-10-01' },
            { name: 'Doe', date: '2021-10-02' },
          ]}
        />
      </div>
    </div>
  );
};

export default App;

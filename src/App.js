import {
  GlobalProvider,
  AddTransaction, Balance, IncomeExpenses, Header, TransactionList
} from './Reference-import'
import './App.css';

function App() {
  return (
    <>
     <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        </GlobalProvider>
      </>
      );
}

      export default App;

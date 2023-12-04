import { Route, Routes } from "react-router-dom"
import PaymentModal from '../PaymentModal/PaymentModal'

const AppRouter = () => (
  <Routes>
    <Route index element={'/'} />
    <Route path="/payments-info" element={<PaymentModal />} />
  </Routes>
);

export default AppRouter

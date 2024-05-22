import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<WarehousesPage />} />
				<Route path="/warehouses/:id" element={<WarehousesPage />} />
				<Route path="/warehouses/:id/edit" element={<WarehousesPage />} />
				<Route path="/warehouses/add" element={<WarehousesPage />} />
				<Route path="/inventories" element={<InventoryPage />} />
				<Route path="/inventories/:id" element={<InventoryPage />} />
				<Route path="/inventories/:id/edit" element={<InventoryPage />} />
				<Route path="/inventories/add" element={<InventoryPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

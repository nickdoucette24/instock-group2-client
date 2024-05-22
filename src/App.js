import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseDetailsPage from "./components/WarehouseDetailsPage/WarehouseDetailsPage";
import AddEditWarehousePage from "./pages/AddEditWarehousePage/AddEditWarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import AddEditInventoryPage from "./pages/AddEditInventoryPage/AddEditInventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} /> */}
				<Route path="/warehouses/:id/edit" element={<AddEditWarehousePage />} />
				<Route path="/warehouses/add" element={<AddEditWarehousePage />} />
				<Route path="/inventories" element={<InventoryPage />} />
				<Route path="/inventories/:id" element={<InventoryDetailsPage />} />
				<Route
					path="/inventories/:id/edit"
					element={<AddEditInventoryPage />}
				/>
				<Route path="/inventories/add" element={<AddEditInventoryPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

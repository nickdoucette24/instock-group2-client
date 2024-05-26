// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CancelButton from "../CancelButton/CancelButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import './NewItemForm.scss';

const NewItemForm = ({ submitButton, url }) => {
    const [errors, setErrors] = useState({});
    const [selected, setSelected] = useState('');
    const [warehouses, setWarehouses] = useState([]);
    const [formValues, setFormValues] = useState({
        item_name: "",
        description: "",
        category: "",
        status: "",
        quantity: "",
        warehouse_name: "",
    });
    const navigate = useNavigate();

    useEffect(()  => {
        const getWarehouseData = async () => {
            try {
                const response = await axios.get(`${url}/api/warehouses`);
                setWarehouses(response.data);
            } catch (error) {
                console.error("Error retrieving warehouse data:", error);
            }
        }

        getWarehouseData();
    }, [url])

    const handleChangeState = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        
        // Update the formValues with the selected status
        setFormValues({
            ...formValues,
            status: value,
        });
    
        // Deselect the other radio button
        if (name === 'in-stock' && value === 'In Stock') {
            setFormValues({
                ...formValues,
                status: "In Stock"
            });
        } else if (name === 'out-of-stock' && value === 'Out of Stock') {
            setFormValues({
                ...formValues,
                status: 'Out of Stock'
            });
        }

        setSelected(name);
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formErrors = {};
        if (!formValues.item_name) formErrors.warehouse_name = true;
        if (!formValues.description) formErrors.description = true;
        if (!formValues.category) formErrors.category = true;
        if (!formValues.status) formErrors.status = true;
        if (!formValues.quantity) formErrors.quantity = true;
        if (!formValues.warehouse_name) formErrors.warehouse_name = true;
        setErrors(formErrors);

        // If there are errors, don't proceed with the form submission
        if (Object.keys(formErrors).length > 0) {
            return;
        }

        const selectedWarehouse = warehouses.find(warehouse => warehouse.warehouse_name === formValues.warehouse_name)
        const warehouseId = selectedWarehouse ? selectedWarehouse.id : null;

        if (!warehouseId) {
            console.error("Invalid warehouse selected");
            return;
        }

        // Create the new item object from form data
        const newItem = {
            item_name: formValues.item_name,
            description: formValues.description,
            category: formValues.category,
            status: formValues.status,
            quantity: formValues.quantity,
            warehouse_id: warehouseId
        };

        try {
            await axios.post(`${url}/api/inventories`, newItem)
            alert("New Inventory Item Added Successfully: " + formValues.item_name);
            navigate('/inventories');
        } catch (error) {
            console.error("Error adding new inventory item:", error);
        }
    }

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <section className="form-fields">
                <section className="form-section form-section--warehouse">
                    <h2 className="form-section__header">Item Details</h2>
                    <div className="form-section__input-wrapper">
                        <div className="warehouse-details__name">
                            <label className="form-label">
                                Item Name
                                <input 
                                    className={errors.item_name ? "form-input--error" : "form-input"}
                                    type="text" 
                                    name="item_name" 
                                    placeholder="Item Name"
                                    onChange={handleChangeState}
                                    value={formValues.item_name}
                                />
                                {errors.item_name && <ErrorMessage />}
                            </label>
                        </div>
                        <div className="warehouse-details__street">
                            <label className="form-label">
                                Description
                                <textarea 
                                    className={errors.description ? "form-textArea--error" : "form-textArea"}
                                    type="text" 
                                    name="description" 
                                    placeholder="Please enter a brief item description..." 
                                    onChange={handleChangeState}
                                    value={formValues.description}
                                />
                                {errors.description && <ErrorMessage />}
                            </label>
                        </div>
                        <div className="warehouse-details__city">
                            <label className="form-label" htmlFor="category-select">
                                Category
                                <select 
                                    className={errors.category ? "form-select--error" : "form-select"}
                                    type="text" 
                                    id="category-select"
                                    name="category" 
                                    placeholder="Please select" 
                                    onChange={handleChangeState}
                                    value={formValues.category}
                                >
                                    <option value="" className="placeholder" disabled>Please select</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Health">Health</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.category && <ErrorMessage />}
                            </label>
                        </div>
                    </div>
                </section>
                <hr className="section-border" />
                <section className="form-section">
                    <h2 className="form-section__header">Item Availability</h2>
                    <div className="form-section__input-wrapper">
                        <div className="contact-details__name">
                            <label className="form-label">
                                Status
                                <div className="radio-selectors">
                                    <div className="radio-selectors__item">
                                        <input 
                                            className="radio"
                                            id="instock"
                                            type="radio" 
                                            name="status" 
                                            onChange={handleRadioChange}
                                            checked={formValues.status === 'In Stock'} // Check if this radio is selected
                                            value="In Stock"
                                        />
                                        <label htmlFor="instock" className={`p2 radio-text ${selected === 'in-stock' ? 'selected' : ''}`}>In stock</label>
                                    </div>
                                    <div className="radio-selectors__item">
                                        <input 
                                            className="radio"
                                            id="outofstock"
                                            type="radio" 
                                            name="status" 
                                            onChange={handleRadioChange}
                                            checked={formValues.status === 'Out of Stock'} // Check if this radio is selected
                                            value="Out of Stock"
                                        />
                                        <label htmlFor="outofstock" className={`p2 radio-text ${selected === 'out-of-stock' ? 'selected' : ''}`}>Out of stock</label>
                                    </div>
                                </div>
                                {errors.status && <ErrorMessage />}
                            </label>
                        </div>
                        {formValues.status === 'In Stock' && (
                            <div className="contact-details__position">
                                <label className="form-label">
                                    Quantity
                                    <input 
                                        className={errors.quantity ? "form-input--error" : "form-input"}
                                        type="text" 
                                        name="quantity" 
                                        placeholder="0" 
                                        onChange={handleChangeState}
                                        value={formValues.quantity}
                                    />
                                    {errors.quantity && <ErrorMessage />}
                                </label>
                            </div>
                        )}
                        <div className="contact-details__phone">
                            <label className="form-label">
                                Warehouse
                                <select 
                                    className={errors.warehouse_name ? "form-select--error" : "form-select"}
                                    type="text" 
                                    name="warehouse_name" 
                                    placeholder="Please select" 
                                    onChange={handleChangeState}
                                    value={formValues.warehouse_name}
                                >
                                    <option value="" className="placeholder" disabled>Please select</option>
                                    <option value="Boston">Boston</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Manhattan">Manhattan</option>
                                    <option value="Miami">Miami</option>
                                    <option value="Santa Monica">Santa Monica</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="SF">SF</option>
                                    <option value="Washington">Washington</option>
                                </select>
                                {errors.warehouse_name && <ErrorMessage />}
                            </label>
                        </div>
                    </div>
                </section>
            </section>
            <section className="buttons">
                <CancelButton />
                <button className="btn__add btn__add--form" type="submit">{submitButton}</button>
            </section>
        </form>
    );
};
    
export default NewItemForm;